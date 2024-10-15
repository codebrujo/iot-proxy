import { Device } from "../types/devices";

// DO NOT FORGET TO ADD DEVICE to .env file
const extendedDeviceData = [
  {
    deviceId: 1,
    description: 'Device 1',
  },
  {
    deviceId: 2,
    description: 'Device 2',
  },
  {
    deviceId: 3,
    description: 'Device 3',
  },
  {
    deviceId: 4,
    description: 'Device 4',
  },
]

const registeredDevices: Device[] = []

export const getRegisteredDevices = () => {
  return registeredDevices
}

export const loadDevices = () => {
  if (process.env.DEVICES_AUTH_DATA) {
    const devices = (process.env.DEVICES_AUTH_DATA as string).split(';')
    devices.forEach(device => {
      const [sourceDeviceId, deviceSecret] = device.split(':')
      const deviceId = parseInt(sourceDeviceId)
      const deviceData = extendedDeviceData.find(item => item.deviceId === deviceId)
      registeredDevices.push({
        deviceId,
        passcode: deviceSecret,
        description: deviceData?.description,
      })
    })
  }
  console.log(`${registeredDevices.length} devices loaded`)
}