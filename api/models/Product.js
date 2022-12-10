const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter hotel name'],
    trim: true,
    maxLength: [100, 'Product name cannot exceed 100 characters']
  },
  price: {
    type: Number,
    required: [true, 'Please enter hotel price'],
    maxLength: [6, 'Product price cannot exceed 6 characters'],
    default: 0.0
  },
  description: {
    type: String,
    required: [true, 'Please enter hotel description'],
  },
  ratings: {
    type: Number,
    default: 0
  },
  images: [
    {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
    }
  ],
  category: {
    type: String,
    required: [true, 'Please select city for this product'],
    enum: {
      values: [
        'London',
		'Paris',
		'New York City',
		'Tokyo',
		'Dubai',
		'Books',
		'Barcelona',
		'Rome',
		'Madrid',
		'Portugal',
		'Amsterdam',
		'Boston',
      ],
      message: 'Please select correct city for product'
    }
  },
  seller: {
    type: String,
    required: [true, 'Please enter hotel country']
  },
  stock: {
    type: Number,
    required: [true, 'Please enter hotel avilability'],
    maxLength: [5, 'Product name cannot exceed 5 characters'],
    default: 0
  },
  numOfReviews: {
    type: Number,
    default: 0
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
      },
      name: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      comment: {
        type: String,
        required: true
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Product', productSchema)