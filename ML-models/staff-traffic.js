const tf = require('@tensorflow/tfjs');
const data = require('./data.json');

const normalize = (value, max, min) => (value - min) / (max - min);

const prepareData = (data) => {
    const inputs = [];
    const outputs = [];

    data.forEach(entry => {
        const normalizedDay = normalize(new Date(entry.date).getDay(), 6, 0);
        const normalizedMonth = normalize(new Date(entry.date).getMonth() + 1, 12, 1);
        const normalizedYear = normalize(entry.date.split('-')[0], 2024, 2019);
        
        inputs.push([
            normalizedDay,
            normalizedMonth,
            normalizedYear,
            entry.holiday ? 1 : 0,
            entry.eventBooking ? 1 : 0,
            entry.specialPromotion ? 1 : 0,
        ]);
        
        outputs.push([entry.staffRequired, entry.footTraffic]);
    });

    return { inputs: tf.tensor2d(inputs), outputs: tf.tensor2d(outputs) };
};

const { inputs, outputs } = prepareData(data);

const model = tf.sequential();
model.add(tf.layers.dense({ units: 32, activation: 'relu', inputShape: [inputs.shape[1]] }));
model.add(tf.layers.dense({ units: 16, activation: 'relu' }));
model.add(tf.layers.dense({ units: 2 }));
model.compile({ optimizer: tf.train.adam(0.001), loss: 'meanSquaredError' });

(async () => {
    await model.fit(inputs, outputs, { epochs: 500, batchSize: 32 });
    console.log('Model trained.');

    const exampleInput = [
        0 / 6,
        9 / 12,
        (2024 - 2019) / (2024 - 2019),
        1,
        1,
        0
    ];

    const inputTensor = tf.tensor2d([exampleInput]);
    const prediction = model.predict(inputTensor).arraySync()[0];

    console.log(`Predicted Staff Required: ${Math.round(prediction[0])}`);
    console.log(`Predicted Foot Traffic: ${Math.round(prediction[1])}`);

    let totalErrorStaff = 0;
    let totalErrorTraffic = 0;
    const numExamples = outputs.shape[0];

    for (let i = 0; i < numExamples; i++) {
        const actual = outputs.arraySync()[i];
        totalErrorStaff += Math.abs(actual[0] - prediction[0]);
        totalErrorTraffic += Math.abs(actual[1] - prediction[1]);
    }

    const maeStaff = totalErrorStaff / numExamples;
    const maeTraffic = totalErrorTraffic / numExamples;

    console.log(`Mean Absolute Error for Staff Required: ${maeStaff}`);
    //console.log(`Mean Absolute Error for Foot Traffic: ${maeTraffic}`);
})();
