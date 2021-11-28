const httpStatus = require('http-status');
const { Lop1 } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a lop1
 * @param {Object} lop1Body
 * @returns {Promise<Lop1>}
 */
const createLop1 = async (lop1Body) => {
  return Lop1.create(lop1Body);
};

/**
 * Query for lop1s
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryLop1s = async (filter, options) => {
  const lop1s = await Lop1.paginate(filter, options);
  return lop1s;
};

/**
 * Get lop1 by id
 * @param {ObjectId} id
 * @returns {Promise<Lop1>}
 */
const getLop1ById = async (id) => {
  return Lop1.findById(id);
};

/**
 * Get lop1 by email
 * @param {string} email
 * @returns {Promise<Lop1>}
 */
const getLop1ByEmail = async (email) => {
  return Lop1.findOne({ email });
};

/**
 * Update lop1 by id
 * @param {ObjectId} lop1Id
 * @param {Object} updateBody
 * @returns {Promise<Lop1>}
 */
const updateLop1ById = async (lop1Id, updateBody) => {
  const lop1 = await getLop1ById(lop1Id);
  if (!lop1) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Lop1 not found');
  }
  if (updateBody.email && (await Lop1.isEmailTaken(updateBody.email, lop1Id))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(lop1, updateBody);
  await lop1.save();
  return lop1;
};

/**
 * Delete lop1 by id
 * @param {ObjectId} lop1Id
 * @returns {Promise<Lop1>}
 */
const deleteLop1ById = async (lop1Id) => {
  const lop1 = await getPeopleById(lop1Id);
  if (!lop1) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Lop1 not found');
  }
  await lop1.remove();
  return lop1;
};

module.exports = {
  createLop1,
  queryLop1s,
  getLop1ById,
  getLop1ByEmail,
  updateLop1ById,
  deleteLop1ById,
};
