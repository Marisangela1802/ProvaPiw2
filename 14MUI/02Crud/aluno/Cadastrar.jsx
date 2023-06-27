import { Box, InputLabel, Select, FormControl, TextField, Typography, MenuItem, Button, FormGroup, FormControlLabel, Checkbox, FormLabel } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CadastrarAluno = () => {

    const [nome, setNome] = useState("")
    //useState já vai iniciar com DD
    const [curso, setCurso] = useState("DD")
    const [ira, setIra] = useState("0.0")
    
    

    const navigate = useNavigate()
    
    function handleSubmit(event) {
        event.preventDefault()
        // console.log(nome)
        // console.log(curso)
        // console.log(titulacao)
        // console.log(ai)
        const novoAluno = {nome, curso, ira}
        axios.post("http://localhost:3001/alunos/criar", novoAluno)
        .then(
            (response)=>{
                alert(`Aluno ID ${response.data._id} adicionado!`)
                navigate("/listarAluno")
            }
        )
        .catch(error=>console.log(error))
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Cadastrar Aluno
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

                {/* precisa do formcontrol para juntar o input label com o select */}
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel id="select-cu-label">Curso</InputLabel>
                    <Select
                        labelId="select-cu-label"
                        label="Curso"
                        value={curso}
                        //o event.target.value é quem vai pegar o valor da variável
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
                    type="number"
                    inputProps={{
                        maxLength: 10,
                        step: "0.1"
                    }}
                    //é preciso utilizar o parseFloat para retornar número
                    onChange={(event) => setIra(parseFloat(event.target.value))}
                />

                
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

export default CadastrarAluno;