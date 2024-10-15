import { Worker } from "worker_threads";
import path = require("path");
import { Message } from "../../types/queue";
import { messageTypes } from '../../constants/queue'

const queuePath = path.resolve(__dirname, ".", "queue.js")

const messageProcessors = {
  [messageTypes.info]: (data) => {
    console.log(data)
  },
  [messageTypes.commands]: (data) => {
    console.log(data)
  },
  [messageTypes.error]: (data, err) => {
    console.error(data, err)
  },
}

const handleQueueMessage = (msg: Message) => {
  if (messageProcessors[msg.type]) messageProcessors[msg.type](msg.data, undefined)
}

export default async () => {
  const queue = new Worker(queuePath)
  queue.on("message", (msg: Message) => handleQueueMessage(msg))
  queue.on("error", (err) => messageProcessors[messageTypes.error]("Queue worker error", err))
  queue.on("exit", (code) => {
    console.log(
      `${
        code !== 0 ? "Internal server error: " : ""
      }Queue worker exit with the code`,
      code
    )
  })
}
