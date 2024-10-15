import { getRegisteredDevices } from "../constants/devices";
import { DeviceStatus, DeviceStatuses } from "../types/devices";

const deviceStatus: DeviceStatus[] = []

const getStatuses = () => {
  return deviceStatus
};

const getDeviceStatus = (deviceId: number) => {
  return deviceStatus.find(item => item.deviceId === deviceId)?.status || DeviceStatuses.UNKNOWN
};

const setOnlineStatus = (deviceId: number) => {
  const deviceStatusRecord = deviceStatus.find(item => item.deviceId === deviceId)
  if (deviceStatusRecord) {
    deviceStatusRecord.status = DeviceStatuses.ONLINE
  } else {
    deviceStatus.push({
      deviceId,
      status: DeviceStatuses.ONLINE
    })
  }
};

const prepopulateStatuses = () => {
  const devices = getRegisteredDevices()
  devices.forEach(device => deviceStatus.push({
    deviceId: device.deviceId,
    status: DeviceStatuses.UNKNOWN,
  }));
};

export default {
  getStatuses,
  getDeviceStatus,
  setOnlineStatus,
  prepopulateStatuses,
};
