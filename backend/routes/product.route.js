import express from "express";
import { createProduct, getProducts, deleteProduct, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

// Get All Products
router.get("/", getProducts);

// Add Product
router.post("/", createProduct);

// Delete Product
router.delete("/:id", deleteProduct);

// Update Product
// use patch for updating some fields
// use put for updating all fields
router.put("/:id", updateProduct);

export default router;