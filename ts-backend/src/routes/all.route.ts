import express from "express";
import { getMenuSettings } from "../controllers/all.controller";

const router = express.Router();

router.get("/menu-config", getMenuSettings)

export default router