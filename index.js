const nodeCron = require("node-cron");
 

const job = nodeCron.schedule("30 * * * * *", () => {
    console.log(new Date().toLocaleString());
  });