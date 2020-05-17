var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var orderSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  // cart as object instead of reference to allow displaying it in AdminBro
  // if we create our own custom Admin interface, we can reference cart instead
  cart: {
    totalQty: {
      type: Number,
      default: 0,
      required: true,
    },
    totalCost: {
      type: Number,
      default: 0,
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        qty: {
          type: Number,
          default: 0,
        },
        price: {
          type: Number,
          default: 0,
        },
        title: {
          type: String,
        },
        productCode: {
          type: String,
        },
      },
    ],
  },
  //checkout form info
  address: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  paymentId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  Delivered: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Order", orderSchema);
