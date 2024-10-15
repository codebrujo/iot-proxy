import * as dotenv from 'dotenv'
if (!process.env.NODE_ENV) {
  console.log('Not containerized. Loading .env')
  dotenv.config({path: '.env'})
}
import app from './App'
import queue from './workers/queue'
import { loadDevices } from './constants/devices'
import deviceStatus from './services/deviceStatus'

loadDevices()
deviceStatus.prepopulateStatuses()
queue()

const port = process.env.PORT || 3000

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on port ${port} environment: ${process.env.NODE_ENV}`)
})
