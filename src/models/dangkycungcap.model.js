
const mongoose = require('mongoose');
const { data } = require('../config/logger');


const { toJSON, paginate } = require('./plugins');


const dangkycungcapSchema = mongoose.Schema(
  {
    MaDKCC: String,
    MaNhaCC: {
      type: String,
      ref: 'Nhacungcap',
    },
    MaLoaiDV: String,
    DongXe: String,
    MaMP: String,
    BatDauCC: {
      type: Date,
      require: true,
      trim: true
    },
    KetThucCC: {
      type: Date,
      require: true,
      trim: true,
    },
    SLXeDK: Number,
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
dangkycungcapSchema.plugin(toJSON);
dangkycungcapSchema.plugin(paginate);


/**
 * @typedef Dangkycungcap
 */
const Dangkycungcap = mongoose.model('Dangkycungcap', dangkycungcapSchema);

module.exports = Dangkycungcap;
