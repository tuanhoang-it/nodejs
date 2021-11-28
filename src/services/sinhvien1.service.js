const httpStatus = require('http-status');
const { Sinhvien1 } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a sinhvien1
 * @param {Object} sinhvien1Body
 * @returns {Promise<Sinhvien1>}
 */
const createSinhvien1 = async (sinhvien1Body) => {
  return Sinhvien1.create(sinhvien1Body);
};

/**
 * Query for sinhvien1s
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const querySinhvien1s = async (filter, options) => {
  const sinhvien1s = await Sinhvien1.paginate(filter, options);
  return sinhvien1s;
};

/**
 * Get sinhvien1 by id
 * @param {ObjectId} id
 * @returns {Promise<Sinhvien1>}
 */
const getSinhvien1ById = async (id) => {
  return Sinhvien1.findById(id);
};

/**
 * Get sinhvien1 by email
 * @param {string} email
 * @returns {Promise<Sinhvien1>}
 */
const getSinhvien1ByEmail = async (email) => {
  return Sinhvien1.findOne({ email });
};

/**
 * Update sinhvien1 by id
 * @param {ObjectId} sinhvien1Id
 * @param {Object} updateBody
 * @returns {Promise<Sinhvien1>}
 */
const updateSinhvien1ById = async (sinhvien1Id, updateBody) => {
  const sinhvien1 = await getSinhvien1ById(sinhvien1Id);
  if (!sinhvien1) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Sinhvien1 not found');
  }
  if (updateBody.email && (await Sinhvien1.isEmailTaken(updateBody.email, sinhvien1Id))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(sinhvien1, updateBody);
  await sinhvien1.save();
  return sinhvien1;
};

/**
 * Delete sinhvien1 by id
 * @param {ObjectId} sinhvien1Id
 * @returns {Promise<Sinhvien1>}
 */
const deleteSinhvien1ById = async (sinhvien1Id) => {
  const sinhvien1 = await getPeopleById(sinhvien1Id);
  if (!sinhvien1) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Sinhvien1 not found');
  }
  await sinhvien1.remove();
  return sinhvien1;
};

module.exports = {
  createSinhvien1,
  querySinhvien1s,
  getSinhvien1ById,
  getSinhvien1ByEmail,
  updateSinhvien1ById,
  deleteSinhvien1ById,
};
