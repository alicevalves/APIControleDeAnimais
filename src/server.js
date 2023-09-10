const express = require("express");
const cors = require("cors");

const AnimaisController = require("./controllers/AnimaisController");
const OngsController = require("./controllers/OngsController");
const app = express();
app.use(express.json({ limit: "50mb", extended: true }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(express.text({ limit: "200mb" }));
app.use(cors());

app.get("/", (req, res) => {
  res.send({ msg: "Rota para teste" });
});

// Animais
app.post('/animais', AnimaisController.adicionarAnimal);
app.get('/animais', AnimaisController.listarAnimais);
app.delete('/animais/:id', AnimaisController.excluirAnimal);
app.put('/animais/:id', AnimaisController.atualizarAnimal);

// Ongs
app.post('/ongs', OngsController.adicionarOng);
app.get('/ongs', OngsController.listarOngs);
app.delete('/ongs/:id', OngsController.excluirOng);
app.put('/ongs/:id', OngsController.atualizarOng);

app.listen(3000, () => {
  console.log("Aplicação executando na porta 3000");
});
