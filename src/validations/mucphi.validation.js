const Joi = require('joi');

const createMucphi = {
  body: Joi.object().keys({
    MaMP: Joi.string().required(),
    DonGia: Joi.number().required(),
    MoTa: Joi.string(),
  }),
};


module.exports = {
  createMucphi,
};
