const { Schema, model } = require('mongoose');

const UserSchema = Schema(
    {
        name: {type: String, required: true, trim: true},
        lastName: {type: String, required: true, trim: true},
        email: {type: String, required: true, trim: true},
        password: {type: String, required: true, trim: true},
        contacts: {
            type: [],
            trim: true,
            ref: "Contact"
        }
    }
)


UserSchema.methods.toJSON = function() {
    const {password, _v, ...user} = this.toObject();
    return user;
}

module.exports = model("User", UserSchema);