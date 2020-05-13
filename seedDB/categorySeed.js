const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Category = require("../models/category");
const mongoose = require("mongoose");

const uri = process.env.MONGO_URI || "mongodb://localhost/bags-ecommerce";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MONGODB CONNECTED SUCCESSFULLY!");
});

async function seedDB() {
  async function seedCateg(titleStr) {
    try {
      const categ = await new Category({ title: titleStr });
      await categ.save();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }
  await seedCateg("Backpacks");
  await seedCateg("Briefcases");
  await seedCateg("Mini Bags");
  await seedCateg("Large Handbags");
  await seedCateg("Travel");
  await seedCateg("Totes");
  await seedCateg("Purses");
  await closeDB();
}

seedDB();
