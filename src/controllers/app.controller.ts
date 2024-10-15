import { getRegisteredDevices } from "../constants/devices";
import { sign } from 'jsonwebtoken';

const getHandler = (req, res) => {
  res.json({
    method: "GET",
    result: "OK",
  });
}

const loginDeviceHandler = (req, res) => {
  const { deviceId, passcode } = req.body
  const device = getRegisteredDevices().find(u => u.deviceId === deviceId)

  if (!device) {
    return res.status(401).json({ error: 'Invalid deviceId or passcode' })
  }

  const token = sign({ userId: deviceId }, process.env.JWT_SECRET, {
    expiresIn: '120d',
  })

  if (device.passcode !== passcode) {
    return res.status(401).json({ error: 'Invalid deviceId or passcode' })
  }

  res.set('Content-Type', 'text/plain')
  res.send(token)
}

export default {
  getHandler,
  loginDeviceHandler,
}
