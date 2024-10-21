const express = require("express");
const app = express();

const port = 8235;

app.listen(port, () => {
  console.log(
    `The backend service is online. To integrate with it, use the API endpoint at port`,
    port
  );
});
