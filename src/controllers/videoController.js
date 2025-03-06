import video from "../models/video.js";

class VideoController {
  static async listar(req, res) {
    res.status(200).send("Online");
  }

  static async listarVideos(req, res) {
    try {
      const listaVideos = await video.find({});
      res.status(200).json(listaVideos);
    } catch (error) {
      res.status(500).json({
        message: `Falha ao cadastrar o video - ${error.mesage}`,
      });
    }
  }

  static async listarVideoPorId(req, res) {
    try {
      const id = req.params.id;
      const videoEncontrado = await video.findById(id);
      res.status(200).json(videoEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição do livro` });
    }
  }

  static async cadastrarVideo(req, res) {
    try {
      const novoVideo = await video.create(req.body);

      res.status(201).json({
        message: "Vídeo criado!",
        video: novoVideo,
      });
    } catch (error) {
      res.status(500).json({
        message: `Falha ao cadastrar o video - ${error.mesage}`,
      });
    }
  }

  static async atualizarVideo(req, res) {
    try {
      const id = req.params.id;
      await video.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Video atualizado!" });
    } catch (error) {
      res.status(500).json({
        message: `Falha ao atualizar o video - ${error.mesage}`,
      });
    }
  }

  static async deletarVideo(req, res) {
    try {
      const id = req.params.id;
      await video.findByIdAndDelete(id);
      res.status(200).json({ message: "Video excluído!" });
    } catch (error) {
      res.status(500).json({
        message: `Falha ao cadastrar o video - ${error.mesage}`,
      });
    }
  }
}

export default VideoController;
