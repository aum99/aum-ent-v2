import { instance } from "../server.js";
import crypto from "crypto";
import { initializeApp } from "firebase/app";
import { getFirestore, updateDoc, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAood0m1hh7lFJqhtYIWA3CuTt1_BcCIoc",
  authDomain: "aum-enterprise.firebaseapp.com",
  projectId: "aum-enterprise",
  storageBucket: "aum-enterprise.appspot.com",
  messagingSenderId: "899558090168",
  appId: "1:899558090168:web:87d813d5cf8c28758f5b4d",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

let currUser = null;
let newItems = null;
let oldItems = {};

export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.total * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  currUser = req.body.user;
  newItems = req.body.cartItems;
  res.status(200).json({
    success: true,
    order,
  });
};

export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;
  if (isAuthentic) {
    const userDoc = doc(db, "users", currUser.id);
    const userSnap = await getDoc(userDoc);
    if (userSnap.exists) {
      oldItems = userSnap.data().items;
      const products = {
        items: {
          ...oldItems,
          [razorpay_order_id]: { ...newItems, placedAt: new Date() },
        },
      };
      await updateDoc(userDoc, products);
    }
    res.redirect(
      `https://aum-enterprises.netlify.app/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
};
