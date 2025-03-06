import express from "express";
import VideoController from "../controllers/videoController.js";

const routes = express.Router();

// LISTAR

routes.get("/videos", VideoController.listarVideos);

routes.get("/videos/:id", VideoController.listarVideoPorId);

// CADASTRAR

routes.post("/videos", VideoController.cadastrarVideo);

// EDITAR

routes.put("/videos/:id", VideoController.atualizarVideo);

// DELETAR

routes.delete("/videos/:id", VideoController.deletarVideo);

export default routes;
