const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie } = require('../../utils/auth');
const { User, Picture, Album } = require('../../db/models');

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
  const albums = await Album.findAll({ include: [User, { model: Picture, include: User }] })

  res.json(albums)
}))


router.post('/', asyncHandler(async (req, res) => {
  const { name, userId, coverImage } = req.body
  await Album.create({
    name,
    userId,
    coverImage
  });


  const newAlbum = await Album.findOne({
    order: [['id', 'DESC']],
    include: [User, Picture]
  })

  res.json(newAlbum)

}))

router.put('/:id', asyncHandler(async (req, res) => {
  const album = await Album.findByPk(req.params.id, { include: [User, Picture] })
  const { name } = req.body

  await album.update({
    name
  })
  await album.save()

  res.json(album)
}))

router.put('/:id/add', asyncHandler(async (req, res) => {
  const { picture, album } = req.body
  const updatedPicture = await Picture.findByPk(picture.id, { include: [User] })
  await updatedPicture.update({
    albumId: album.id
  })
  await updatedPicture.save()


  const updatedAlbum = await Album.findByPk(req.params.id, { include: [User, Picture] })
  res.json({ updatedPicture, updatedAlbum })
}))

router.put('/:id/setToNull', asyncHandler(async (req, res) => {
  const album = await Album.findByPk(req.params.id);
  const pictures = await Picture.findAll({
    where: {
      albumId: album.id
    }
  })
  pictures.forEach(async picture => {
    await picture.update({
      albumId: null
    })
    await picture.save()
  })
  console.log(album)
  res.json({ album })
}))

router.post('/:id/delete', asyncHandler(async (req, res) => {
  const album = await Album.findByPk(req.params.id);


  await album.destroy();

  const albums = await Album.findAll({ include: [User, { model: Picture, include: User }] })
  res.json(albums)
}))


module.exports = router
