'use strict';

/**
 * categorie controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::categorie.categorie', ({strapi}) => ({
    async findOne(ctx) {
        const {slug} = ctx.params;
        const entity =  await strapi.db.query('api::categorie.categorie').findOne({
            where: {slug},
            populate:  "*",
        });
        const sanitizedEntity = await this.sanitizeOutput(entity);

        return this.transformResponse(sanitizedEntity);
    }
}));
