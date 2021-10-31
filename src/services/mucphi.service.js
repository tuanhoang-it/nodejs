
const { Mucphi } = require('../models');



const createMucphi = async (mucphi) => {
  const result = Mucphi.create(mucphi);
  return result;
};



module.exports = {
  createMucphi,
};
