const mongoose = require('mongoose');
const { toJSON, paginate} = require('./plugins');

const lop1Schema = mongoose.Schema(
    {
        tenLop: {
            type: String,
            trim: true,
            required: true,
        },
        maKhoa: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Khoa'
        },
    },
    {
        timestamps: true,
    }
);

//add plugin that converts mongoose to json
lop1Schema.plugin(toJSON);
lop1Schema.plugin(paginate);

/**
 * @typedef Lop1
 */
const Lop1 = mongoose.model('Lop1', lop1Schema);

module.exports = Lop1;
