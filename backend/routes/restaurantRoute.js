const express = require('express')
const {
  getAllRestaurant,
  addRestaurant,
  getRestaurant,
  putRestaurant,
  deleteRestaurant,
  bookRestaurant } = require('../controllers/restaurantController')
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+'-'+file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

const router = express.Router()

router.get('/', getAllRestaurant)
router.get('/:_id', getRestaurant)

router.put('/:_id', putRestaurant)
router.put('/book/:_id', bookRestaurant)

router.delete('/:_id', deleteRestaurant)

router.post('/add', upload.single('photo'), addRestaurant)
module.exports = router