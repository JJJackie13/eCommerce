import { ExpressFunction } from "../types/expressFunction";
import Product from "../models/productModel";

export const getAllProducts: ExpressFunction = async (req, res) => {
	try {
		const allProducts = await Product.find()

		res.status(200).json({
			status: "success",
			results: allProducts.length,
			data: {
				allProducts,
			},
		})
	} catch (error) {
		res.status(400).json({
			status: "fail",
			message: error,
		})
	}
}

export const addProduct: ExpressFunction = async (req, res) => {
	try {
		const newProduct = await Product.create(req.body)

		res.status(200).json({
			status: "success",
			data: {
				product: newProduct,
			}
		})
	} catch (error) {
		res.status(400).json({
			status: "fail",
			message: error,
		})
	}
}

export const deleteProduct: ExpressFunction = async (req, res) => {
	try {
		
	} catch (error) {
		
	}
}

export const updateProduct: ExpressFunction = async (req, res) => {
	try {
		
	} catch (error) {
		
	}
}