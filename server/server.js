const express = require("express");
const app = express();
require("../database/db");
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/task", taskRoutes);

const port = 8235;

app.listen(port, () => {
  console.log(
    `The backend service is online. To integrate with it, use the API endpoint at port`,
    port
  );
});
