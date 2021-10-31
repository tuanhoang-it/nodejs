
const { Loaidichvu } = require('../models');



const createLoaidichvu = async (loaidichvu) => {
  const result = Loaidichvu.create(loaidichvu);
  return result;
};



module.exports = {
  createLoaidichvu,
};
