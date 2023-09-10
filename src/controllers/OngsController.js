const Ongs = require('../models/Ongs');

class OngsController {
  static async adicionarOng(req, res) {
    try {
      const data = req.body;
      await Ongs.adicionarOng(data);
      res.status(201).send({ msg: "ONG adicionada com sucesso!" });
    } catch (error) {
      res.status(500).send({ msg: "Erro ao adicionar ONG" });
    }
  }

  static async listarOngs(req, res) {
    try {
      const ongs = await Ongs.listarOngs();
      res.send(ongs);
    } catch (error) {
      res.status(500).send({ msg: "Erro ao listar ONGs" });
    }
  }

  static async excluirOng(req, res) {
    try {
      const id = req.params.id;
      await Ongs.excluirOng(id);
      res.status(200).send({ msg: "ONG excluída com sucesso!" });
    } catch (error) {
      res.status(500).send({ msg: "Erro ao excluir ONG" });
    }
  }

  static async atualizarOng(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;
      await Ongs.atualizarOng(id, data);
      res.status(200).send({ msg: "ONG atualizada com sucesso!" });
    } catch (error) {
      res.status(500).send({ msg: "Erro ao atualizar ONG" });
    }
  }
}

module.exports = OngsController;