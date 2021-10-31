const { phone } = require('faker');
const mongoose = require('mongoose');
const { data } = require('../config/logger');

const { toJSON, paginate } = require('./plugins');


const nhacungcapSchema = mongoose.Schema(
  {
    MaNhaCC: String,
    TenNhaCC: String,
    DiaChi: {
      type: String,
      trim: true,
    },
    SoDT: {
      type: String,
      trim: true,
      require: true,
    },
    MaSoThue: {
      type: Number,
      unique: true,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
nhacungcapSchema.plugin(toJSON);
nhacungcapSchema.plugin(paginate);


/**
 * @typedef Nhacungcap
 */
const Nhacungcap = mongoose.model('Nhacungcap', nhacungcapSchema);

module.exports = Nhacungcap;
