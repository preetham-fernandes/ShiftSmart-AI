const tf = require('@tensorflow/tfjs');
const fs = require('fs');

const rawData = fs.readFileSync('staff_data.json');
const data = JSON.parse(rawData);

const inputs = data.map(item => [
    item.timeSinceJoined,
    item.numberOfLeaves,
    item.tasksDone,
    item.daysWorkedOvertime,
    item.customerRating
]);

const labels = data.map(item => item.retained);

const normalizeData = (dataset) => {
    return dataset.map((dataPoint) => {
        return dataPoint.map(value => {
            return (value - Math.min(...dataset.flat())) / (Math.max(...dataset.flat()) - Math.min(...dataset.flat()));
        });
    });
};

const normalizedInputs = normalizeData(inputs);
const normalizedLabels = normalizeData([labels]).flat();

const inputTensor = tf.tensor2d(normalizedInputs);
const labelTensor = tf.tensor1d(normalizedLabels);

const model = tf.sequential();
model.add(tf.layers.dense({ units: 16, activation: 'relu', inputShape: [5] }));
model.add(tf.layers.dense({ units: 8, activation: 'relu' }));
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

model.compile({
    optimizer: tf.train.adam(),
    loss: 'binaryCrossentropy',
    metrics: ['accuracy']
});

(async () => {
    await model.fit(inputTensor, labelTensor, {
        epochs: 200,
        batchSize: 5,
        callbacks: {
            onEpochEnd: (epoch, logs) => {
                console.log(`Epoch ${epoch}: loss = ${logs.loss}`);
            }
        }
    });

    const exampleInput = [
        2.3,
        2,
        20,
        1,
        3.7
    ];

    const normalizedExampleInput = normalizeData([exampleInput])[0];

    const prediction = model.predict(tf.tensor2d([normalizedExampleInput]));
    const probability = await prediction.data();

    probability[0].toFixed(2) > 0.50 ? (console.log("Hire")) : (console.log("Fire"));
})();
