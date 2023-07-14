const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const { Configuration, OpenAIApi } = require("openai");

const authRoute = require("./routes/authRouter");
const scriptRoute = require("./routes/ScriptRouter");
const connectDatabase = require("./config/database");
const app = express();

app.use(cors());

//Config to  read .env files
dotenv.config({ path: path.join(__dirname, "config/config.env") });
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
connectDatabase();
// Handle responses
app.use("/api/v1", authRoute);
app.use("/api/v1", scriptRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
