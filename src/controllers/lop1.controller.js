const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { lop1Service } = require('../services');

const createLop1 = catchAsync(async (req, res) => {
  const lop1 = await lop1Service.createLop1(req.body);
  res.status(httpStatus.CREATED).send(lop1);
});

const getLop1s = catchAsync(async (req, res) => {
  const result = await lop1Service.queryLop1s();
  res.send(result);
});

const getLop1 = catchAsync(async (req, res) => {
  const lop1 = await lop1Service.getLop1ById(req.params.lop1Id);
  if (!lop1) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Lop1 not found');
  }
  res.send(lop1);
});

const updateLop1 = catchAsync(async (req, res) => {
  const lop1 = await lop1Service.updateLop1ById(req.params.lop1Id, req.body);
  res.send(lop1);
});

const deleteLop1 = catchAsync(async (req, res) => {
  await lop1Service.deleteLop1ById(req.params.lop1Id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createLop1,
  getLop1s,
  getLop1,
  updateLop1,
  deleteLop1,
};
