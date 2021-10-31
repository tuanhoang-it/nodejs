const { phone } = require('faker');
const mongoose = require('mongoose');
const { data } = require('../config/logger');

const { toJSON, paginate } = require('./plugins');


const mucphiSchema = mongoose.Schema(
  {
    MaMP: String,
    DonGia: Number,
    MoTa: String,
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
mucphiSchema.plugin(toJSON);
mucphiSchema.plugin(paginate);


/**
 * @typedef Mucphi
 */
const Mucphi = mongoose.model('Mucphi', mucphiSchema);

module.exports = Mucphi;
