const Joi = require('joi');

const createNhacungcap = {
  body: Joi.object().keys({
    MaNhaCC: Joi.string().required(),
    TenNhaCC: Joi.string().required(),
    DiaChi: Joi.string().optional(),
    SoDT: Joi.string().optional(),
    MaSoThue: Joi.number().required(),
  }),
};


module.exports = {
  createNhacungcap,
};
