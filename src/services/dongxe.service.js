
const { Dongxe } = require('../models');



const createDongxe = async (dongxe) => {
  const result = Dongxe.create(dongxe);
  return result;
};



module.exports = {
  createDongxe,
};
