const Joi = require('joi');

const createDongxe = {
  body: Joi.object().keys({
    DongXe: Joi.string().optional(),
    HangXe: Joi.string().optional(),
    SoChoNgoi: Joi.number(),
  }),
};


module.exports = {
  createDongxe,
};
