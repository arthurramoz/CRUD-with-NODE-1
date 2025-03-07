import express from "express";
import videos from "./videosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso"));

  app.use(express.json(), videos, autores);
};

export default routes;
