const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie } = require('../../utils/auth');
const { User, Picture, Album } = require('../../db/models');

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
  const albums = await Album.findAll({ include: User })

  res.json(albums)
}))

module.exports = router
