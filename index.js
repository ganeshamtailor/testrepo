const nodeCron = require("node-cron");
 
safda
const job = nodeCron.schedule("30 * * * * *", () => {
    console.log(new Date().toLocaleString());
  });