
const { Dangkycungcap } = require('../models');



const createDangkycungcap = async (dangkycungcap) => {
  const result = Dangkycungcap.create(dangkycungcap);
  return result;
};



module.exports = {
  createDangkycungcap,
};
