'use strict';

/**
 * Dependencies
 */
// const MailService = require('./classes/mail-service');
import MailService from "./classes/mail-service.js";

//Export singleton instance
// module.exports = new MailService();
let mailer = new MailService();
export default mailer;
