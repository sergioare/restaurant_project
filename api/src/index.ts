import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import orderRoutes from "./routes/orders.route";
import productRoutes from "./routes/products.route";

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.use("/orders", orderRoutes);
app.use("/products", productRoutes);

app.get("/hello", (req, res) => {
  res.status(200).json({ message: "API Sun Fu Wok operativa" });
});

export const v1 = functions.https.onRequest(app);
