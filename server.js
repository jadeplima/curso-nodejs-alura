//importar a pasta app
import app from './src/app.js'

//criando a porta
//process.end.port é a constante que vai identificar a porta que esta sendo escutada, que o servidor subiu.
//que é uma porta definida como "porta ambiente de produção"
//isso é considerado uma boa pratica, deixar a porta no ambiente de produção ou na porta fixa.
const port = process.env.PORT || 3000;



//definir a porta que ele vai responder, fazer um link do servidor criado e a porta que vai escutar a requisição e mandar a resposta
//listen => para definir que ele vai escutar => port: mostrar em que porta ele vai escutar
app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})