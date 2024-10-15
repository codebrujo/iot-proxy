export type Device = {
  deviceId: number;
  passcode: string;
  description?: string;
}

export type DeviceCommand = {
  id: number;
  deviceId: number;
  type: number;
  value: number;
};

export enum DeviceStatuses {
  UNKNOWN = 'UNKNOWN',
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
}

export type DeviceStatus = {
  deviceId: number;
  status: DeviceStatuses;
}