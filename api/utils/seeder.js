const Product = require('../models/Product');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const products = require('../data/products');

// Setting dotenv file
dotenv.config({ path: 'api/config/config.env' })

connectDatabase();

const seedProducts = async () => {
  try {

    await Product.deleteMany();
    console.log('Products are deleted');

    await Product.insertMany(products);
    console.log('All products are added.');

    process.exit();
   
  } catch(err) {
    console.log(err.message);
    process.exit();
  }
}

seedProducts();