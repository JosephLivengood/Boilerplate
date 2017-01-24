/*
*   app/routes/public/index.js - Our public routes (or 'reducer' as we grow)
*/
const AuthHelper = require('../../auth/authHelper.js');
const SampleViewHandler = require('../../controllers/public/viewHandler.sample.js');
const ProfileHandler = require('../../controllers/public/profileHandler.js');
    
module.exports = function (app, db) {
    
    const authHelper = new AuthHelper(db);
    const sampleViewHandler = new SampleViewHandler(db);
    const profileHandler = new ProfileHandler(db);
   
    app.route('/')
        .get(function(req, res) { res.send('Hello World!') });
    
    app.route('/login')
        .get(function(req, res) { res.send('Use /auth/github or /auth/google to authenticate') });
    
    app.route('/logout')
        .get(function(req, res) { req.logout(); res.redirect('/login') });

    app.route('/profile')
        .get(authHelper.ensureAuthenticated, profileHandler.showProfile);
    
    app.route('/admin-only-url')
        .get(authHelper.ensureAdmin, profileHandler.showProfile);
    
    app.route('/s/:param')
        .get(sampleViewHandler.showDefault);
    
};