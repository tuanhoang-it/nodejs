const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { mucphiService } = require('../services');

const createMucphi = catchAsync(async (req, res) => {
  const mucphi = await mucphiService.createMucphi(req.body);
  res.status(httpStatus.CREATED).send(mucphi);
});



module.exports = {
  createMucphi,
};
