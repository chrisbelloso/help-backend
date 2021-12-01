const { model, Schema } = require('mongoose');

const ContactSchema = Schema(

    {
        name: {type: String, required: true, trim: true},
        phoneNumber: {type: Number, required: true, trim: true},
        userCreator: { type: Schema.Types.ObjectId }
    }
)

module.exports = model("Contact", ContactSchema);