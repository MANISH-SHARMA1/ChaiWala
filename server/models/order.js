const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  companyName: String,
  streetName: String,
  apartmentName: String,
  city: String,
  state: String,
  pinCode: Number,
  phone: Number,
  email: String,
  diffFirstName: String,
  diffLastName: String,
  diffCompanyName: String,
  diffStreetName: String,
  diffApartmentName: String,
  diffCity: String,
  diffState: String,
  diffPinCode: Number,
  orderNote: String,
  subTotal: String,
  total: String,
});

module.exports = mongoose.model("order", ordersSchema);
