import { Box, InputLabel, Select, FormControl, TextField, Typography, MenuItem, Button, FormGroup, FormControlLabel, Checkbox, FormLabel } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

const EditarAluno = () => {

    //substituindo banco de dados

    // const professores = [
    //     { id: 0, nome: "Daemon Salvatore", curso: "Musica", titulacao: "MEST", ai:{es:true, al:false, ds:false, mc:false}},
    //     { id: 1, nome: "Helena Gilbert", curso: "Medicina", titulacao: "GRAD", ai:{es:false, al:true, ds:false, mc:false} },
    //     { id: 2, nome: "Caroline Forbes", curso: "Teatro", titulacao: "GRAD", ai:{es:false, al:false, ds:true, mc:false} },
    //     { id: 3, nome: "Stefan Salvatore", curso: "Direito", titulacao: "MEST", ai:{es:false, al:false, ds:false, mc:true} },
    //     { id: 4, nome: "Klaus Mikaelson", curso: "Arte", titulacao: "DOUT", ai:{es:true, al:false, ds:true, mc:false} }

    // ]

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [ira, setIra] = useState(0)

    let { id } = useParams()
    //hook que permite que a gente faça um redirect
    const navigate = useNavigate()
    
    //substituir banco de dados
    // function getProfessorById(id) {
    //     for(let i=0;i<professores.length;i++)
    //         if(id == professores[i].id) return professores[i]
    //         return null
    // }

    //como está vazio, o useEffect funciona como um construtor(só vai rodar uma vez!)
    useEffect(
        () => {
            // let professor = getProfessorById(id)
            // if(professor){
            //     setNome(professor.nome)
            //     setCurso(professor.curso)
            //     setTitulacao(professor.titulacao)
            //     setAi(professor.ai)
            // }
            axios.get(`http://localhost:3001/alunos/recuperar/${id}`)
                .then(
                    (response) => {
                        setNome(response.data.nome)
                        setCurso(response.data.curso)
                        setIra(response.data.ira)
                    }

                )
                .catch(error=>(console.log(error)))
        }
        ,
        [id]
    )


    function handleSubmit(event) {
        event.preventDefault()
        // console.log(nome)
        // console.log(curso)
        // console.log(titulacao)
        // console.log(ai)
        const alunoAtualizado = {nome, curso, ira}
        axios.put(`http://localhost:3001/alunos/atualizar/${id}`, alunoAtualizado)
        .then(
            (response)=>{
                alert(`Aluno ID ${response.data._id} atualizado!`)
                navigate("/listarAluno")
            }
        )
        .catch(error=>(console.log(error)))
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Editar Aluno {id}
            </Typography>
            {/* <h4>{nome}</h4> */}
            {/* <h3>{titulacao}</h3> */}
            <Box
                component="form"
                //o botão tem que ser tipo submit para o onSubmit funcionar
                onSubmit={handleSubmit}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nome"
                    name="nome"
                    label="Nome Completo"
                    autoFocus
                    value={nome}
                    //enquanto estiver digitando ele já vai pegando cada letra, e quando apertar submit que envio para o servidor
                    onChange={(event) => setNome(event.target.value)}
                />

                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel id="select-cu-label">Curso</InputLabel>
                    <Select
                        labelId="select-cu-label"
                        label="Curso"
                        value={curso}
                        onChange={(event) => setCurso(event.target.value)}
                    >
                        <MenuItem value="DD">DD</MenuItem>
                        <MenuItem value="SI">SI</MenuItem>
                        <MenuItem value="CC">CC</MenuItem>
                        <MenuItem value="ES">ES</MenuItem>
                        <MenuItem value="EC">EC</MenuItem>
                        <MenuItem value="RC">RC</MenuItem>
                        

                    </Select>
                </FormControl>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="ira"
                    name="ira"
                    label="Ira"
                    value={ira}
                    onChange={(event) => setIra(event.target.value)}
                />

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ my: 3 }}
                    >
                        Editar
                    </Button>

                </Box>


            </Box>
        </>

    )
}

export default EditarAluno;