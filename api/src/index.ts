import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/hello", (req, res) => {
  res.status(200).json({ message: "API Sun Fu Wok operativa" });
});

export const v1 = functions.https.onRequest(app);
