'use strict';

/**
 * Expose helpers
 */
// const arrayToJSON = require('./array-to-json');
// const convertKeys = require('./convert-keys');
// const deepClone = require('./deep-clone');
// const mergeData = require('./merge-data');
// const splitNameEmail = require('./split-name-email');
// const toCamelCase = require('./to-camel-case');
// const toSnakeCase = require('./to-snake-case');
// const wrapSubstitutions = require('./wrap-substitutions');

import arrayToJSON from "./array-to-json.js";
import convertKeys from "./convert-keys.js";
import deepClone from "./deep-clone.js";
import mergeData from "./merge-data.js";
import splitNameEmail from "./split-name-email.js";
import toCamelCase from "./to-camel-case.js";
import toSnakeCase from "./to-snake-case.js";
import wrapSubstitutions from "./wrap-substitutions.js";

/**
 * Export
 */
// module.exports = {
//   arrayToJSON,
//   convertKeys,
//   deepClone,
//   mergeData,
//   splitNameEmail,
//   toCamelCase,
//   toSnakeCase,
//   wrapSubstitutions,
// };

export default {
  arrayToJSON,
  convertKeys,
  deepClone,
  mergeData,
  splitNameEmail,
  toCamelCase,
  toSnakeCase,
  wrapSubstitutions,
};
