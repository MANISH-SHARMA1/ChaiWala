const { success, error } = require("../utils/responseWrapper");
const orderSchema = require("../models/order");

const orderController = async (req, res) => {
  const {
    firstName,
    lastName,
    companyName,
    streetName,
    apartmentName,
    city,
    state,
    pinCode,
    phone,
    email,
    diffFirstName,
    diffLastName,
    diffCompanyName,
    diffStreetName,
    diffApartmentName,
    diffCity,
    diffState,
    diffPinCode,
    orderNote,
    subTotal,
    total,
  } = req.body;

  try {
    const order = await orderSchema.create({
      firstName,
      lastName,
      companyName,
      streetName,
      apartmentName,
      city,
      state,
      pinCode,
      phone,
      email,
      diffFirstName,
      diffLastName,
      diffCompanyName,
      diffStreetName,
      diffApartmentName,
      diffCity,
      diffState,
      diffPinCode,
      orderNote,
      subTotal,
      total,
    });

    res.send(success(200, order));
  } catch (e) {
    res.send(error(400, e));
  }
};

module.exports = { orderController };
