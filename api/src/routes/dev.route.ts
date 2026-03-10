import { Router } from "express";
import { seedProducts } from "../services/mocks.service";
import { Timestamp } from "firebase-admin/firestore";

const router = Router();

router.get("/seed-menu", async (_req, res) => {
  try {
    const nowDate = Timestamp.now();
    await seedProducts();
    return res.status(200).json({
      message:
        "Success! Sun Fu Wok menu has been seeded with 7 products and modifiers.",
      timestamp: nowDate,
    });
  } catch (error) {
    console.error("Seed Error:", error);
    return res.status(500).json({ error: "Failed to seed database" });
  }
});

export default router;
