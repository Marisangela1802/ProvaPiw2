import { Box, InputLabel, Select, FormControl, TextField, Typography, MenuItem, Button, FormGroup, FormControlLabel, Checkbox, FormLabel } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Cadastrar = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("GRAD")
    const [ai,setAi] = useState({es:false, al:false, ds:false, mc:false})

    const navigate = useNavigate()
    
    function handleSubmit(event) {
        event.preventDefault()
        // console.log(nome)
        // console.log(curso)
        // console.log(titulacao)
        // console.log(ai)
        const novoProfessor = {nome, curso, titulacao, ai}
        axios.post("http://localhost:3001/professores/criar", novoProfessor)
        .then(
            (response)=>{
                alert(`Professor ID ${response.data._id} adicionado!`)
                navigate("/listarProfessor")
            }
        )
        .catch(error=>console.log(error))
    }

    function handleCheckbox(event){
        setAi({
            //isso aqui pega o que tinha antes
            ...ai,
            //pega o que checou tranforma em uma propriedade: o valor que voce fez seja true ou false
            [event.target.name]:event.target.checked
        })
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Cadastrar Professor
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
                        <FormControlLabel control={<Checkbox checked={ai.es} name="es" onChange={handleCheckbox}/>} label="Engenharia de Software" />
                        <FormControlLabel control={<Checkbox checked={ai.al} name="al" onChange={handleCheckbox}/>} label="Algoritmos" />
                        <FormControlLabel control={<Checkbox checked={ai.ds} name="ds" onChange={handleCheckbox}/>} label="Desenvolvimento de Software" />
                        <FormControlLabel control={<Checkbox checked={ai.mc} name="mc" onChange={handleCheckbox}/>} label="Matemática Computacional" />
                    </FormGroup>
                </FormControl>
                <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ my: 3 }}
                    >
                        Cadastrar
                    </Button>

                </Box>


            </Box>
        </>

    )
}

export default Cadastrar;