const Router = require('express');
const userController = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');
const upload = require('../multerConfig');

const router = new Router();

router.post('/registration', upload.single('img'), userController.registration);
router.post('/login', userController.login);
router.get('/auth', auth, userController.check);

module.exports = router;