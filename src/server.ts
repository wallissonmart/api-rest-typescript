import express from "express";
import routes from "./routes";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(routes);

mongoose
  .connect(
    `mongodb+srv://wall:${process.env.PASS}@cluster0.zlnp2.mongodb.net/?retryWrites=true&w=majority`
  )

  .then((data) => {
    console.log("MongoDB conectado com sucesso!", data.version);
  })

  .catch((err) => {
    console.log("Erro ao se conectar ao banco de dados:", err.message);
  });

app.listen(3000, () =>
  console.log("Servidor rodando na porta: http://localhost:3000")
);
