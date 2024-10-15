import * as express from "express";
import controller from "../controllers/app.controller";
const router = express.Router();

router.route("/")
  .get(controller.getHandler)

router.route("/loginDevice")
  .post(controller.loginDeviceHandler)


export default router;
