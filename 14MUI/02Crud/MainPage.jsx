import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyMenu from "./MyMenuV1";
import { Container } from "@mui/material";
import CadastrarProfessor from "./professor/Cadastrar";
import ListarProfessor from "./professor/Listar";
import EditarProfessor from "./professor/Editar";
import EditarAluno from "./aluno/Editar";
import CadastrarAluno from "./aluno/Cadastrar";
import ListarAluno from "./aluno/Listar";
import ListarAprovados from "./aluno/ListarAprovados";
import Signin from "../01Signin/Signin";

const MainPage = () =>{
    return (
        
        //toda arvore de componentes que eu construir aqui dentro estará a merce das rotar que estão ali dentro
        <BrowserRouter>
            <MyMenu/>
            <Container sx={{mt:4}}>
                <Routes>
                    <Route path="/" element={<Signin/>}/>
                    <Route path="cadastrarProfessor" element={<CadastrarProfessor/>}/>
                    <Route path="listarProfessor" element={<ListarProfessor/>}/>
                    <Route path="editarProfessor/:id" element={<EditarProfessor/>}/>
                    <Route path="cadastrarAluno" element={<CadastrarAluno/>}/>
                    <Route path="listarAluno" element={<ListarAluno/>}/>
                    <Route path="editarAluno/:id" element={<EditarAluno/>}/>
                    <Route path="listarAprovados" element={<ListarAprovados/>}/>
                </Routes>

            </Container>
        </BrowserRouter>
        
    )
}

export default MainPage;