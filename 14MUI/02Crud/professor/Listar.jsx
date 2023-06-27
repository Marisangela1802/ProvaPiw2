import { TableCell, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Typography, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Listar = () => {
//     const professores = [
//         { id: 0, nome: "Daemon Salvatore", curso: "Musica", titulacao: "MEST" },
//         { id: 1, nome: "Helena Gilbert", curso: "Medicina", titulacao: "GRAD" },
//         { id: 2, nome: "Caroline Forbes", curso: "Teatro", titulacao: "GRAD" },
//         { id: 3, nome: "Stefan Salvatore", curso: "Direito", titulacao: "MEST" },
//         { id: 4, nome: "Klaus Mikaelson", curso: "Arte", titulacao: "DOUT" }

//     ]

const [professores, setProfessores] = useState([])
const navigate = useNavigate()
const [mudou, setMudou] = useState(false)

useEffect(
    ()=>{
        axios.get("http://localhost:3001/professores/listar")
        .then(
            (response)=>{
                //console.log(response)
                setProfessores(response.data)
            }
        )
        .catch(error=>console.log(error))
    }
    ,
    []
)

    function deleteProfessorbyId(id){
        if(window.confirm("Tem certeza disso?")){
            axios.delete(`http://localhost:3001/professores/apagar/${id}`)
            .then(
                (response)=>{
                    //esse tem a atualização da página, porém cria todo um vetor novamente por causa de um elemento, e isso pode ser um problema
                    // const resultado = professores.filter(professor => professor.id != id)
                    // console.log(resultado)
                    // setProfessores(resultado)

                    //nessa outra forma não se cria um novo vetor, apenas modifica ele 
                    apagarTeste(id)
                    //e como não atualiza a página é preciso fazer isso aqui pra dizer pra recarregar
                    setMudou(!mudou)
                }
            )
            .catch(error=>console.log(error))
        }
    }

    //modifica a variavel de estado, mas não modifica o objeto.
    function apagarTeste(id) {
        for (let i = 0; i < professores.length; i++) {
            if (professores[i]._id == id) {
                professores.splice(i, 1)
                return true
            }
        }
        return false
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Listar Professor
            </Typography>
            <TableContainer component={Paper} sx={{my:3}}>
                <Table sx={{minWidth:650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>TITULAÇÃO</StyledTableCell>
                            <StyledTableCell>AÇÕES</StyledTableCell>

                        </TableRow>

                    </TableHead>
                    <TableBody>
                        
                    {
                        //abri e fechei chaves pois estou dentro de um código jsx e vou começar a escrever em js
                        //funcao map sempre retorna um novo vetor
                        professores.map(
                            (professor)=>{
                                return (
                                    <StyledTableRow key={professor._id}>
                                        <StyledTableCell>{professor._id}</StyledTableCell>
                                        <StyledTableCell>{professor.nome}</StyledTableCell>
                                        <StyledTableCell>{professor.curso}</StyledTableCell>
                                        <StyledTableCell>{professor.titulacao}</StyledTableCell>
                                        <StyledTableCell>
                                            <Box>
                                                <IconButton aria-label="edit" color="primary" component={Link} to={`/editarprofessor/${professor._id}`}>
                                                    <EditIcon/>
                                                </IconButton>
                                                <IconButton aria-label="delete" color="error" onClick={()=>deleteProfessorbyId(professor._id)}>
                                                    <DeleteIcon/>
                                                </IconButton>
                                            </Box>
                                        </StyledTableCell>

                                    </StyledTableRow>
                                )
                            }
                        )

                    }

                    </TableBody>
                </Table>
                
            </TableContainer>
        </>

    )
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default Listar;