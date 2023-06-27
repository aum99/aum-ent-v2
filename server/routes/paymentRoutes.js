import express from "express";
import {
  checkout,
  paymentVerification,
  checkRef,
} from "../controllers/paymentController.js";

const router = express.Router();

router.route("/checkout", checkout).post(checkout);

router.route("/paymentverification").post(paymentVerification);

router.route("/checkref").get(checkRef);

export default router;
