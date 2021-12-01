const { model, Schema } = require('mongoose');

const CarSchema = Schema(
    {
        carMaker: {type: String, required: true, trim: true},
        carType: {type: String, required: true, trim: true},
        carColor: {type: String, required: true, trim: true}
    }
)

module.exports = model("Car", CarSchema);