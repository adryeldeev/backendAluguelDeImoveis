import express from "express";
import cors from "cors";
import path from "node:path";
import { router } from "./routes";

const app = express();
app.use(cors());
//SERVE IMAGENS STATICAS
app.use('/uploads', express.static(path.resolve(__dirname, '../', 'uploads')));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.use(router);
const port = process.env.PORT || 8000
app.listen(8000, () => {
  console.log(`Server is runing ${port}`);
})