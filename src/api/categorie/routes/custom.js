module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/categorie/:slug',
            handler: 'categorie.findOne',
            config: {
                auth: false,
            }
        }
    ]
}