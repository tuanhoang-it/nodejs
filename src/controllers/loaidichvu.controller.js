const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { loaidichvuService } = require('../services');

const createLoaidichvu = catchAsync(async (req, res) => {
  const loaidichvu = await loaidichvuService.createLoaidichvu(req.body);
  res.status(httpStatus.CREATED).send(loaidichvu);
});



module.exports = {
  createLoaidichvu,
};
