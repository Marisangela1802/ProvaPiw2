const ProfessorModel = require('../models/ProfessorModel')

let professores  = [
    { id: 0, nome: "Daemon Salvatore", curso: "Musica", titulacao: "MEST", ai:{es:true, al:false, ds:false, mc:false}},
    { id: 1, nome: "Helena Gilbert", curso: "Medicina", titulacao: "GRAD", ai:{es:false, al:true, ds:false, mc:false} },
    { id: 2, nome: "Caroline Forbes", curso: "Teatro", titulacao: "GRAD", ai:{es:false, al:false, ds:true, mc:false} },
    { id: 3, nome: "Stefan Salvatore", curso: "Direito", titulacao: "MEST", ai:{es:false, al:false, ds:false, mc:true} },
    { id: 4, nome: "Klaus Mikaelson", curso: "Arte", titulacao: "DOUT", ai:{es:true, al:false, ds:true, mc:false} }

]

let id = 5


class ProfessorService {

    //register
    static criar(data) {
        let professor = new ProfessorModel(
            id++,
            data.nome,
            data.curso,
            data.titulacao,
            data.ai
        )

        professores.push(professor)
        return professor
    }

    static listar() {
        return professores
    }

    static recuperar(id) {
        for (let i = 0; i < professores.length; i++) {
            if (professores[i].id == id) {
                return professores[i]
            }
        }
        return {}
    }

    static atualizar(id, data) {
        for (let p of professores) {
            if (p.id == id) {
                p.nome = data.nome
                p.curso = data.curso
                p.titulacao = data.titulacao
                p.ai = data.ai
                return p
            }
        }
        return null
    }

    static apagar(id) {
        for (let i = 0; i < professores.length; i++) {
            if (professores[i].id == id) {
                professores.splice(i, 1)
                return true
            }
        }
        return false
    }
}

module.exports = ProfessorService