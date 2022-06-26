import express from "express";
import AutorController from "../controllers/autoresController.js";

//configurar as rotas 

const router = express.Router();

router
    .get("/autores", AutorController.listarAutores)
    .get('/autores/:id', AutorController.listarAutorPorid)
    .post("/autores", AutorController.cadastrarAutor)
    .put("./autores/:id", AutorController.atualizarAutor)
    .delete('/autores/:id', AutorController.excluirAutor)




export default router;