import express from "express";
import {
  fourProducts,
  getAllProducts,
  getProductById,
  productPrice,
  task10,
  task5,
  task8,
  task9,
  InsertAllProducts,
} from "../services/product.services.js";

const router = express.Router();

router.get("/insert_all_products", async function (req, res) {
  const insertAllProducts = await InsertAllProducts();
  res.send("success");
});

router.get("/", async function (req, res) {
  const allProducts = await getAllProducts();
  res.send(allProducts);
});

router.get("/:id", async function (req, res) {
  const { id } = req.params;
  const perticularProduct = await getProductById(id);
  res.send(perticularProduct);
});
router.get("/task/q3", async function (req, res) {
  const q3Data = await productPrice();
  res.send(q3Data);
});
router.get("/task/q4", async function (req, res) {
  const q4Data = await fourProducts();
  res.send(q4Data);
});

router.get("/task/q5", async function (req, res) {
  const q5Data = await task5();
  res.send(q5Data);
});
router.get("/task/q9", async function (req, res) {
  const q9Data = await task9();
  res.send(q9Data);
});

router.delete("/task/q10", async function (req, res) {
  const q10Data = await task10();
  res.send(q10Data);
});

export default router;
