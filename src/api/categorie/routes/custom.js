module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/categories/:slug',
            handler: 'categorie.findOne',
            config: {
                auth: false,
            }
        }
    ]
}