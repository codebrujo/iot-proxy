import * as express from "express";
import controller from "../controllers/report.controller";
const router = express.Router();

router.route("/statuses")
  .get(controller.getDeviceStatusesHandler)

export default router;
