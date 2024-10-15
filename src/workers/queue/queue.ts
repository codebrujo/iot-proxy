const { workerData, parentPort } = require("worker_threads");
import { Message } from "../../types/queue";
import { messageTypes } from '../../constants/queue'

const handleMessage = (msg: Message) => {
  console.log(msg);
};

const sendMessage = async (data, type = messageTypes.info) => {
  parentPort.postMessage({
    type,
    data,
   });
};

process.on("disconnect", () => {
  console.log(`Queue is disconnected from parent process. Exitting...`);
  process.exit();
});
parentPort.on("message", (msg) => handleMessage(msg));

sendMessage('Thread queue started')