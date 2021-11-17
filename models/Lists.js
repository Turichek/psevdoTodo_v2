const { Schema, model } = require('mongoose');

const schema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true, unique: true },
    elems: [{ type: Object, required: true}],
    type: { type: String, required: true },
    draggable: { type: String, required: true },
    disabled: { type: Boolean, required: true },
    editable: { type: Boolean, required: true },
})

module.exports = model('Lists', schema);