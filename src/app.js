import express from "express";
import conectaBD from "./config/bdconnect.js";
import routes from "./routes/index.js";

const conexao = await conectaBD();

conexao.on("error", (erro) => {
  console.error("erro de conexao: ", erro);
});

conexao.once("open", () => {
  console.log("conexao realizada com sucesso!");
});

const app = express();
routes(app);

export default app;
