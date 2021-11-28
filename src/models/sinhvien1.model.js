const mongoose = require('mongoose');
const { toJSON, paginate} = require('./plugins');

const sinhvien1Schema = mongoose.Schema(
    {
        hoTen: {
            type: String,
            trim: true,
            minLength: 5,
            maxLength: 30,
            required: true,
        },
        nu: {
            type: String,
            trim: true,
            required: true,
        },
        ngaySinh: {
            type: Date,
            max: new Date(), //chống nhập ngày lung tung
            required: true,  
        },
        maLop: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Lop1', //ref là tham chiếu
        },
        hocBong: {
            type: Number,
            min: 0, //bởi vì học bổng k thể âm
        },
        tinh: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

//add plugin that converts mongoose to json
sinhvien1Schema.plugin(toJSON); //chuyển model thành json
sinhvien1Schema.plugin(paginate);

/**
 * @typedef Sinhvien1
 */
const Sinhvien1 = mongoose.model('Sinhvien1', sinhvien1Schema);

module.exports = Sinhvien1;
