
const { Nhacungcap } = require('../models');



const createNhacungcap = async (nhacungcap) => {
  const result = Nhacungcap.create(nhacungcap);
  return result;
};



module.exports = {
  createNhacungcap,
};
