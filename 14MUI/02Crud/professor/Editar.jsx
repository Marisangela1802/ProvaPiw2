import { Box, InputLabel, Select, FormControl, TextField, Typography, MenuItem, Button, FormGroup, FormControlLabel, Checkbox, FormLabel } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

const Editar = () => {

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
    const [titulacao, setTitulacao] = useState("GRAD")
    const [ai, setAi] = useState({ es: false, al: false, ds: false, mc: false })

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
            axios.get(`http://localhost:3001/professores/recuperar/${id}`)
                .then(
                    (response) => {
                        setNome(response.data.nome)
                        setCurso(response.data.curso)
                        setTitulacao(response.data.titulacao)
                        setAi(response.data.ai)
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
        const professorAtualizado = {nome, curso, titulacao, ai}
        axios.put(`http://localhost:3001/professores/atualizar/${id}`, professorAtualizado)
        .then(
            (response)=>{
                alert(`Professor ID ${response.data._id} atualizado!`)
                navigate("/listarProfessor")
            }
        )
        .catch(error=>(console.log(error)))
    }

    function handleCheckbox(event) {
        setAi({
            //isso aqui pega o que tinha antes
            ...ai,
            //pega o que checou tranforma em uma propriedade: o valor que voce fez seja true ou false
            [event.target.name]: event.target.checked
        })
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Editar Professor {id}
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
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="curso"
                    name="curso"
                    label="Curso"
                    value={curso}
                    onChange={(event) => setCurso(event.target.value)}
                />

                {/* precisa do formcontrol para juntar o input label com o select */}
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel id="select-tit-label">Titulação</InputLabel>
                    <Select
                        labelId="select-tit-label"
                        label="Titulação"
                        value={titulacao}
                        onChange={(event) => setTitulacao(event.target.value)}
                    >
                        <MenuItem value="GRAD">Graduação</MenuItem>
                        <MenuItem value="MEST">Mestrado</MenuItem>
                        <MenuItem value="DOUT">Doutorado</MenuItem>

                    </Select>
                </FormControl>

                <FormControl
                    component="fieldset"
                    variant="standard"
                    sx={{ mt: 2, ml: 2 }}
                >
                    <FormLabel
                        component="legend"
                        sx={{ fontSize: 12, mb: 2 }}
                    >
                        Áreas de Interesse
                    </FormLabel>

                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={ai.es} name="es" onChange={handleCheckbox} />} label="Engenharia de Software" />
                        <FormControlLabel control={<Checkbox checked={ai.al} name="al" onChange={handleCheckbox} />} label="Algoritmos" />
                        <FormControlLabel control={<Checkbox checked={ai.ds} name="ds" onChange={handleCheckbox} />} label="Desenvolvimento de Software" />
                        <FormControlLabel control={<Checkbox checked={ai.mc} name="mc" onChange={handleCheckbox} />} label="Matemática Computacional" />
                    </FormGroup>
                </FormControl>
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

export default Editar;