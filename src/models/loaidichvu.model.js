const { phone } = require('faker');
const mongoose = require('mongoose');
const { data } = require('../config/logger');

const { toJSON, paginate } = require('./plugins');


const loaidichvuSchema = mongoose.Schema(
  {
    MaLoaiDV: String,
    TenLoaiDV: String,
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
loaidichvuSchema.plugin(toJSON);
loaidichvuSchema.plugin(paginate);


/**
 * @typedef Loaidichvu
 */
const Loaidichvu = mongoose.model('Loaidichvu', loaidichvuSchema);

module.exports = Loaidichvu;
