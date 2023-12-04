'use strict';

/**
 * email-beta service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-beta.email-beta');
