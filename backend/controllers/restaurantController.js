const Restaurant = require("../models/restaurantModel");
const fs = require("fs");
const addRestaurant = async (req, res) => {
  try {
    const restauran = new Restaurant({
      name: req.body.name,
      capacity: req.body.capacity,
      address: req.body.address,
      price: req.body.price,
      generalInformation: req.body.generalInformation,
      photo: req.file.path
    });
    const newRestauran = restauran.save()
    res.status(200).json({ restauran })
  } catch (err) {
    res.status(500).json(err)
  }
};

const getAllRestaurant = async (req, res) => {
  try {
    const restaurants = await Restaurant.find()
    const response = restaurants.map(restaurant => {
      console.log(restaurant.photo)
      return {
        _id: restaurant._id,
        name: restaurant.name,
        capacity: restaurant.capacity,
        address: restaurant.address,
        price: restaurant.price,
        bookArray: restaurant.bookArray,
        generalInformation: restaurant.generalInformation,
        imageUrl: "http://localhost:5000/" + restaurant.photo,
        createdAt: restaurant.createdAt,
        updatedAt: restaurant.updatedAt,
        __v: restaurant.__v
      }
    })
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

const getRestaurant = async (req, res) => {

  const { _id } = req.params
  console.log(_id)
  try {
    const restaurant = await Restaurant.findOne({ _id })
    const response = await {
      name: restaurant.name,
      capacity: restaurant.capacity,
      address: restaurant.address,
      price: restaurant.price,
      bookArray: restaurant.bookArray,
      generalInformation: restaurant.generalInformation,
      imageUrl: "http://localhost:5000/" + restaurant.photo,
      createdAt: restaurant.createdAt,
      updatedAt: restaurant.updatedAt,
      __v: restaurant.__v
    }
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
};

const deleteRestaurant = (req, res) => {
  const { _id } = req.params;
  const restaurant = Restaurant.findByIdAndDelete({ _id })
    .then((response) => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
  console.log(restaurant)
  // fs.unlink(restaurant.photo, (err) => {
  //   if (err) {
  //     console.error(err);
  //   }
  // })
  //   .then(() => {
  //     res.status(204).json({
  //       status: 'success',
  //       data: null
  //     });
  //   })
  //   .catch((err) => {
  //     res.status(400).json({
  //       status: 'fail',
  //       message: err.message
  //     });
  //   })

}
const putRestaurant = async (req, res) => {
  try {

  } catch (err) {

  }
}
const bookRestaurant = async (req, res) => {
  const { _id } = req.params
  const { book } = req.body;
  try {
    const ArrayBook = await Restaurant.find({ _id });
     const isBook = ArrayBook[0].bookArray.find(bookArr => bookArr === book)
    const restaurant =(isBook===undefined)&& await Restaurant.updateOne(
      { _id },
      { $push: { bookArray: book } },
      { new: true }
    );
    res.status(200).json(isBook===undefined)
  } catch (err) {
    res.status(500).json({ isBook })
  }
}

module.exports = {
  getAllRestaurant,
  addRestaurant,
  getRestaurant,
  deleteRestaurant,
  bookRestaurant,
  putRestaurant,
  bookRestaurant
}