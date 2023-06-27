const AlunoModel = require("../models/aluno.models.mongo")

class AlunoService {
    static listar(request, response) {
        AlunoModel.find()
            .then(
                (alunos) => {
                    response.status(201).json(alunos)
                }
            )
    }

    static criar(request, response) {
        AlunoModel.create(request.body)
            .then(
                (aluno) => {
                    response.status(201).json(aluno)
                }
            )

    }

    static recuperar(request, response) {
        AlunoModel.findById(request.params.id)
            .then(
                (aluno) => {
                    response.status(201).json(aluno)
                }
            )
    }

    static atualizar(request, response) {
        AlunoModel.findByIdAndUpdate(
            request.params.id,
            request.body,
            { new: true })
            .then(
                (aluno) => {
                    response.status(201).json(aluno)
                }
            )
    }

    static apagar(request, response) {
        AlunoModel.findByIdAndRemove(
            request.params.id
        )
        .then(
            (aluno) => {
                response.status(201).json(aluno)
            }
        )
    }
}
module.exports = AlunoService