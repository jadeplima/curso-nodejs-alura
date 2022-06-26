//Importando a conexao com o banco e exportando

import mongoose from "mongoose";

mongoose.connect("mongodb+srv://jadeplima:102030md@cluster0.tstsmul.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;