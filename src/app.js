//importar o express
import express from "express"; 
//importando o banco de dados: mongoDB
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

//Configurando o banco de dados
db.on("error", console.log.bind(console, 'Erro de Conecção'))
db.once("open", () => {
    console.log("Conecção com o banco feita com sucesso")
})

//Criar uma estancia do express
const app = express();

app.use(express.json())


routes(app);


//exportar arquivos para outros arquivos possa utilizar
export default app