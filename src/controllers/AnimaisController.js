const Animais = require('../models/Animais'); 
 
class AnimaisController { 
  static async adicionarAnimal(req, res) { 
    try { 
      const data = req.body; 
      await Animais.setanimais(data); 
      res.status(201).send({ msg: "Animal adicionado com sucesso!" }); 
    } catch (error) { 
      res.status(500).send({ msg: "Erro ao adicionar animal" }); 
    } 
  } 
 
  static async listarAnimais(req, res) { 
    try { 
      const retorno = await Animais.getanimais(); 
      res.send(retorno); 
    } catch (error) { 
      res.status(500).send({ msg: "Erro ao listar animais" }); 
    } 
  } 
 
  static async excluirAnimal(req, res) { 
    try { 
      const id = req.params.id; 
      await Animais.deleteanimais(id); 
      res.status(200).send({ msg: "Animal excluído com sucesso!" }); 
    } catch (error) { 
      res.status(500).send({ msg: "Erro ao excluir animal" }); 
    } 
  } 
 
  static async atualizarAnimal(req, res) { 
    try { 
      const id = req.params.id; 
      const data = req.body; 
      await Animais.putanimais(id, data); 
      res.status(200).send({ msg: "Animal atualizado com sucesso!" }); 
    } catch (error) { 
      res.status(500).send({ msg: "Erro ao atualizar animal" }); 
    } 
  } 
} 
 
module.exports = AnimaisController;