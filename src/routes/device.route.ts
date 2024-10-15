import * as express from "express";
import controller from "../controllers/device.controller";
import authMiddleware from "../services/auth";
const router = express.Router();

router.param('deviceId', controller.loadDeviceId);

router.use("/:deviceId/status", authMiddleware)

router.route("/:deviceId/status")
  .get(controller.getDeviceStatusHandler)
  .post(controller.postDeviceStatusHandler)

export default router;
