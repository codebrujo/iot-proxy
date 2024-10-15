import { Request, Response } from 'express';
import deviceStatus from '../services/deviceStatus';

const getDeviceStatusesHandler = (req: Request, res: Response) => {
  const deviceId = parseInt(req.params.deviceId)
  res.send(deviceStatus.getStatuses())
};

export default {
  getDeviceStatusesHandler,
};
