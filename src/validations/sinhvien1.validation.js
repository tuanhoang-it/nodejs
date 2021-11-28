const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createSinhvien1 = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('sinhvien1', 'admin'),
  }),
};

const getSinhvien1s = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSinhvien1 = {
  params: Joi.object().keys({
    sinhvien1Id: Joi.string().custom(objectId),
  }),
};

const updateSinhvien1 = {
  params: Joi.object().keys({
    sinhvien1Id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const deleteSinhvien1 = {
  params: Joi.object().keys({
    sinhvien1Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSinhvien1,
  getSinhvien1s,
  getSinhvien1,
  updateSinhvien1,
  deleteSinhvien1,
};