// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import train controller
var trainController = require('./trainController');

// Contact routes
router.route('/trains/add').post(trainController.new);
router.route('/trains/all').get(trainController.index);
router.route('/trains/view/:train_id').get(trainController.view);
router.route('/trains/update/:train_id').post(trainController.update);
router.route('/trains/delete/:train_id').get(trainController.delete);

// Export API routes
module.exports = router;