'use strict';

/**
 * Dependencies
 */
// const Client = require('./classes/client');
import Client from "./classes/client.js";


//Export singleton instance
// module.exports = new Client();
let client = new Client();
export default client;