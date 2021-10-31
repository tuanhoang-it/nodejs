
const { Huongdan } = require('../models');



const createHuongdan = async (huongdan) => {
  const result = Huongdan.create(huongdan);
  return result;
};



module.exports = {
  createHuongdan,
};
