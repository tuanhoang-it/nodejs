const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createLop1 = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('lop1', 'admin'),
  }),
};

const getLop1s = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getLop1 = {
  params: Joi.object().keys({
    lop1Id: Joi.string().custom(objectId),
  }),
};

const updateLop1 = {
  params: Joi.object().keys({
    lop1Id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const deleteLop1 = {
  params: Joi.object().keys({
    lop1Id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createLop1,
  getLop1s,
  getLop1,
  updateLop1,
  deleteLop1,
};