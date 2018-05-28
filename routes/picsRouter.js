const express = require('express');
const router = express.Router();
const { getListAllPicsInFolder } = require('../controller/picsController');


router.get('/:folder/list', getListAllPicsInFolder);

module.exports = router;