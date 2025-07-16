const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    orderId: { type: String, required: true },
    products: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    amount: { type: Number, required: true },
    shippingFee: { type: Number, required: true, default: 2 },
    customerName: { type: String, required: true },
    customerPhone: { type: String, required: true },
    country: { type: String, required: true }, // حقل البلد
    wilayat: { type: String, required: true }, // حقل العنوان
    description: { type: String }, // حقل الوصف (غير مطلوب)
    email: { type: String, required: true },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;