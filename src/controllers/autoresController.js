import autores from "../models/Autor.js"

class AutorController {

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
        res.status(200).json(autores)

        })
    }

    static listarAutorPorid = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if(err){
                res.status(400).send({messege: `${err.menssage} - Id do autor não colocalizado.`})
            } else {
                res.status(200).send(autores);
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autores.save((err) => {
            if(err){
                res.status(500).send({message: `${err.menssage} - Falha ao cadastrar autor`})
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Autor foi atualizado com sucesso'})
            } else {
                res.status(500).send({messege: err.messege})
            }
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({messege: 'Autor removido com sucesso'})
            } else {
                res.status(500).send({messenge: err.menssage})
            }
        })
    }

}

export default AutorController