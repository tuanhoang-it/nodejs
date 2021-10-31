const Joi = require('joi');

const createDangkycungcap = {
  body: Joi.object().keys({
    MaDKCC: Joi.string().required(),
    MaNhaCC: Joi.string().required(),
    MaLoaiDV: Joi.string().required(),
    DongXe: Joi.string().optional(),
    MaMP: Joi.string().required(),
    BatDauCC: Joi.date().required(),
    KetThucCC: Joi.date().required(),
    SLXeDK: Joi.number(),
  }),
};


module.exports = {
  createDangkycungcap,
};
