const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/', postController.crearPost);
router.get('/', postController.obtenerPosts);

module.exports = router;