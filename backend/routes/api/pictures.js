const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie } = require('../../utils/auth');
const { User, Picture } = require('../../db/models');

const router = express.Router()


router.get('/', asyncHandler(async (req, res) => {
  const pictures = await Picture.findAll();
  res.json({ pictures })
})
)


module.exports = router
