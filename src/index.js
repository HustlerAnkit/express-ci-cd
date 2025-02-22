import { express } from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(function () {
  console.log("Server is running on port 3000");
});
