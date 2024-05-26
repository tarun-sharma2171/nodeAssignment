var express = require('express');
var router = express.Router();
const { createForm, getFormsList } = require("../controllers/form");
const { validateFormData } = require("../middlewares/form");

/* GET home page. */
router.post('/fill_data', validateFormData, createForm)
    .get('form_list', getFormsList)

module.exports = router;
