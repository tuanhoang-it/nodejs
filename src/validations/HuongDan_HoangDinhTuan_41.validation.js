const Joi = require('joi');

const createHuongdan = {
  body: Joi.object().keys({
    masv: Joi.number().required(),
    madt: Joi.string().optional(),
    magv: Joi.number().required(),
    ketqua: Joi.number(),
  }),
};


module.exports = {
  createHuongdan,
};
