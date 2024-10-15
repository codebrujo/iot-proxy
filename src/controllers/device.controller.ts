import { Request, Response, NextFunction } from 'express';
import deviceStatus from '../services/deviceStatus';

function loadDeviceId(req: Request, res: Response, next: NextFunction, deviceId) {
  req.params.deviceId = deviceId;
  return next();
}

const getDeviceStatusHandler = (req: Request, res: Response) => {
  const deviceId = parseInt(req.params.deviceId)
  res.send({
    deviceId,
    status: deviceStatus.getDeviceStatus(deviceId)
  })
};

const postDeviceStatusHandler = (req: Request, res: Response) => {
  const deviceId = parseInt(req.params.deviceId)
  deviceStatus.setOnlineStatus(deviceId)
  res.json({
    deviceId,
    status: deviceStatus.getDeviceStatus(deviceId)
  });
};

export default {
  loadDeviceId,
  getDeviceStatusHandler,
  postDeviceStatusHandler,
};
