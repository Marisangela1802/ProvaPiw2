const ProfessorModel = require("../models/professor.models.mongo")

class ProfessorService {
    static listar(request, response) {
        ProfessorModel.find()
            .then(
                (professores) => {
                    response.status(201).json(professores)
                }
            )
    }

    static criar(request, response) {
        ProfessorModel.create(request.body)
            .then(
                (professor) => {
                    response.status(201).json(professor)
                }
            )

    }

    static recuperar(request, response) {
        ProfessorModel.findById(request.params.id)
            .then(
                (professor) => {
                    response.status(201).json(professor)
                }
            )
    }

    static atualizar(request, response) {
        ProfessorModel.findByIdAndUpdate(
            request.params.id,
            request.body,
            { new: true })
            .then(
                (professor) => {
                    response.status(201).json(professor)
                }
            )
    }

    static apagar(request, response) {
        ProfessorModel.findByIdAndRemove(
            request.params.id
        )
        .then(
            (professor) => {
                response.status(201).json(professor)
            }
        )
    }
}
module.exports = ProfessorService