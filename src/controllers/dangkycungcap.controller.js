const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { dangkycungcapService } = require('../services');

const createDangkycungcap = catchAsync(async (req, res) => {
  const dangkycungcap = await dangkycungcapService.createDangkycungcap(req.body);
  res.status(httpStatus.CREATED).send(dangkycungcap);
});



module.exports = {
  createDangkycungcap,
};
