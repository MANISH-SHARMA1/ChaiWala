const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUri =
    "mongodb+srv://mdatabase56:05e0oXM1YqmgyE6a@cluster0.w2beg4n.mongodb.net/?retryWrites=true&w=majority";

  try {
    const connect = await mongoose.connect(mongoUri, {
        serverApi: {
            version: "1",
            strict: false,
            deprecationErrors: true,
          },
    });
    console.log(`Mongodb connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
