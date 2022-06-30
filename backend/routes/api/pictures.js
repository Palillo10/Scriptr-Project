const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie } = require('../../utils/auth');
const { User, Picture } = require('../../db/models');


const router = express.Router()


router.get('/', asyncHandler(async (req, res) => {
  const pictures = await Picture.findAll({
    include: User
  });
  res.json({ pictures })
})
)


router.post('/', asyncHandler(async (req, res) => {
  const { name, userId, imageUrl } = req.body
  const newPicture = await Picture.create({
    name,
    userId,
    imageUrl
  })
  const pictures = await Picture.findAll({
    include: User
  });
  res.json({ newPicture, pictures })
}))

router.put('/:id', asyncHandler(async (req, res) => {
  const picture = await Picture.findByPk(req.params.id);
  const { name, description } = req.body
  await picture.update({
    name,
    description
  });

  await picture.save();
  res.json({ picture })
}))

router.delete('/:id', asyncHandler(async (req, res) => {
  const picture = await Picture.findByPk(req.params.id);
  await picture.destroy();

  const pictures = await Picture.findAll({
    include: User
  });
  return res.json({ pictures })
}))


module.exports = router
