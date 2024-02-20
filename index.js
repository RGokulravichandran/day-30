import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import productRouter from "./routes/product.routes.js";

const app = express();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

export const client = new MongoClient(MONGO_URL);
await client.connect(); // top leve await
console.log("Mongo is connected");
app.use(express.json());
app.use(cors());

app.get("/", async function (req, res) {
  const data = await client
    .db("day28")
    .collection("products")
    .find({})
    .toArray();
  res.send(data);


});

app.use("/products", productRouter);

app.listen(PORT, () => console.log(`The Server is running in PORT: ${PORT}`));
