import express from "express";
import { addProduct, getAllProducts, deleteProduct, updateProduct } from "../controllers/productController";

const router = express.Router()

router.route("/")
  .get(getAllProducts)
  .post(addProduct)

router.route("/:id")
  .delete(deleteProduct)
  .update(updateProduct)

export default router