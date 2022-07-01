const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie } = require('../../utils/auth');
const { User, Picture, Album } = require('../../db/models');

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
  const albums = await Album.findAll({ include: [User, Picture] })

  res.json(albums)
}))


router.post('/', asyncHandler(async (req, res) => {
  const { name, userId, coverImage } = req.body
  const newAlbum = await Album.create({
    name,
    userId,
    coverImage
  });

  res.json(newAlbum)

}))

router.put('/:id', asyncHandler(async (req, res) => {
  const album = await Album.findByPk(req.params.id)
  const { name, coverImage } = req.body

  await album.update({
    name,
    coverImage
  })
  await album.save()

  res.json(album)
}))


router.delete('/:id', asyncHandler(async (req, res) => {
  const album = await Album.findByPk(req.params.id);

  await album.destroy();

  const albums = await Album.findAll({ include: User })
  res.json(albums)
}))


module.exports = router
