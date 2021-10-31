
const mongoose = require('mongoose');
const { data } = require('../config/logger');

const { toJSON, paginate } = require('./plugins');


const huongdanSchema = mongoose.Schema(
  {
    masv: {
      type: Number,
      required: true,
    },
    madt: String,
    magv: {
      type: Number,
      required: true,
    },
    ketqua: Number,
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
huongdanSchema.plugin(toJSON);
huongdanSchema.plugin(paginate);


/**
 * @typedef Huongdan
 */
const Huongdan = mongoose.model('Huongdan', huongdanSchema);

module.exports = Huongdan;
