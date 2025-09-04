const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/user-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connection is successful");
  } catch (err) {
    console.error("❌ DB connection failed", err);
    process.exit(1);
  }
};

module.exports = connectDB;

