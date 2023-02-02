const paypalController = require('../controllers/paypal.controller');

module.exports = router => {
    router.post(
    '/v1/payment/paypal/create-link',
        Middleware.isAuthenticated,
        paypalController.createAccountLink,
        Middleware.Response.success('createLink')
    );
    
};
