var express = require('express');
var router = express.Router();
// var alunoService = require('../services/Aluno');
var alunoServiceMongo = require("../services/aluno.services.mongo")

//register
// router.post(
//     "/criar",
//     (req, res, next) => {
//         const professor = professorService.criar(req.body)
//         return res.json(professor)
//     }
// )

// router.get(
//     "/listar",
//     (req, res, next) => {
//         return res.json(professorService.listar())
//     }
// ) 

router.get(
    "/listar",
    (request, response, next) => {
        alunoServiceMongo.listar(request, response)
    }
) 

router.post(
    "/criar",
    (request, response, next) => {
        alunoServiceMongo.criar(request, response)
    }
)

router.get('/recuperar/:id', function (request, response, next) {
        alunoServiceMongo.recuperar(request, response)
    }
);

router.put('/atualizar/:id', 
    function (request, response, next) {
        alunoServiceMongo.atualizar(request, response)

    }
);

router.delete('/apagar/:id', 
    function (request, response, next) {
        alunoServiceMongo.apagar(request, response)
    }
);

// router.put('/atualizar/:id', 
//     function (req, res, next) {
//         const professor = professorService.atualizar(req.params.id, req.body)
//         return res.json(professor)

//     }
// );

// router.delete('/apagar/:id', 
//     function (req, res, next) {
//         const ok = professorService.apagar(req.params.id)
//         if(ok) return res.json({"sucesso":true})
//         return res.json({"sucesso":false})
//     }
// );

// router.get('/recuperar/:id', 
//     function (req, res, next) {
//         const professor = professorService.recuperar(req.params.id)
//         return res.json(professor)
//     }
// );


module.exports = router
//Stochastic Analytical Model with a Bayesian Approach