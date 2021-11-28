const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { sinhvien1Service } = require('../services');

const createSinhvien1 = catchAsync(async (req, res) => {
  const sinhvien1 = await sinhvien1Service.createSinhvien1(req.body);
  res.status(httpStatus.CREATED).send(sinhvien1);
});

const getSinhvien1s = catchAsync(async (req, res) => {
  const result = await sinhvien1Service.querySinhvien1s();
  res.send(result);
});

const getSinhvien1 = catchAsync(async (req, res) => {
  const sinhvien1 = await sinhvien1Service.getSinhvien1ById(req.params.sinhvien1Id);
  if (!sinhvien1) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Sinhvien1 not found');
  }
  res.send(sinhvien1);
});

const updateSinhvien1 = catchAsync(async (req, res) => {
  const sinhvien1 = await sinhvien1Service.updateSinhvien1ById(req.params.sinhvien1Id, req.body);
  res.send(sinhvien1);
});

const deleteSinhvien1 = catchAsync(async (req, res) => {
  await sinhvien1Service.deleteSinhvien1ById(req.params.sinhvien1Id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSinhvien1,
  getSinhvien1s,
  getSinhvien1,
  updateSinhvien1,
  deleteSinhvien1,
};
