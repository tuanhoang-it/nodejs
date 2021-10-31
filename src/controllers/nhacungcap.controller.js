const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { nhacungcapService } = require('../services');

const createNhacungcap = catchAsync(async (req, res) => {
  const nhacungcap = await nhacungcapService.createNhacungcap(req.body);
  res.status(httpStatus.CREATED).send(nhacungcap);
});



module.exports = {
  createNhacungcap,
};
