const Joi = require('joi');

const createLoaidichvu = {
  body: Joi.object().keys({
    MaLoaiDV: Joi.string(),
    TenLoaiDV: Joi.string(),
  }),
};


module.exports = {
  createLoaidichvu,
};
