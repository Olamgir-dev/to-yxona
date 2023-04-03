const Restaurant = require("../models/restaurantModel");

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
        generalInformation: restaurant.generalInformation,
        imageUrl: "http:/localhost:5000/" + restaurant.photo,
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
  try {
    const restaurant = await Restaurant.findOne({ _id })
    const response =await {
      name: restaurant.name,
      capacity: restaurant.capacity,
      address: restaurant.address,
      price: restaurant.price,
      generalInformation: restaurant.generalInformation,
      imageUrl: "http:/localhost:5000/" + restaurant.photo,
      createdAt: restaurant.createdAt,
      updatedAt: restaurant.updatedAt,
      __v: restaurant.__v
    }
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
};

module.exports = { getAllRestaurant, addRestaurant, getRestaurant }