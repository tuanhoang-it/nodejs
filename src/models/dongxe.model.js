
const { string } = require('joi');
const mongoose = require('mongoose');
const { data } = require('../config/logger');

const { toJSON, paginate } = require('./plugins');


const dongxeSchema = mongoose.Schema(
  {
    DongXe: String,
    HangXe: String,
    SoChoNgoi: Number,
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
dongxeSchema.plugin(toJSON);
dongxeSchema.plugin(paginate);


/**
 * @typedef Dongxe
 */
const Dongxe = mongoose.model('Dongxe', dongxeSchema);

module.exports = Dongxe;
