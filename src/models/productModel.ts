import { InferSchemaType, model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    SKU: {
      type: Number,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    stock: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
    }
  },
  { timestamps: true }
)

type Product = InferSchemaType<typeof productSchema>

export default model<Product>("Product", productSchema)