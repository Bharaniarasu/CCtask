const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useUnifiedTopology: true,
    })
    .then((conn) =>
      console.log(`MongoDB is connected on : ${conn.connection.host}`)
    );
};

module.exports = connectDatabase;
