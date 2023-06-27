//menu sem dropdow
//position static é para quando vc rolar a página o menu continuar no mesmo lugar

import { AppBar, Box, Button, Menu, Container, Toolbar, Typography, MenuItem, TextField } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb"
import { Link } from "react-router-dom";
import { useState } from "react";


const MyMenu = () => {

    const [anchorElProfessor, setanchorElProfessor] = useState(null)

    //event.currentTarget é usado para identificar qual elemento DOM acionou o evento e atualizar o estado correspondente para refletir essa interação do usuário.
    const handleOpenAnchorElProfessor = (event) => {
        setanchorElProfessor(event.currentTarget)
    }
    const handleCloseAnchorElProfessor = () => {
        setanchorElProfessor(null)
    }

    const [anchorElAluno, setanchorElAluno] = useState(null)

    const handleOpenAnchorElAluno = (event) => {
        setanchorElAluno(event.currentTarget)
    }

    const handleCloseAnchorElAluno = (event) => {
        setanchorElAluno(null)
    }

    function dropProfMenu() {
        return (
            <Box>
                <Button
                    sx={{ color: "white", my: 2 }}
                    onClick={handleOpenAnchorElProfessor}


                >
                    Professores
                </Button>
                <Menu
                    anchorEl={anchorElProfessor}
                    open={Boolean(anchorElProfessor)}
                    onClose={handleCloseAnchorElProfessor}
                >
                    <MenuItem
                        onClick={handleCloseAnchorElProfessor}
                        component={Link}
                        to={"cadastrarProfessor"}
                    >
                        Cadastrar
                    </MenuItem>
                    <MenuItem
                        onClick={handleCloseAnchorElProfessor}
                        component={Link}
                        to={"listarProfessor"}

                    >
                        Listar
                    </MenuItem>

                </Menu>

                
                
            </Box>
        )
    }

    function dropAlunMenu() {
        return (
            <Box>
                <Button
                    sx={{ color: "white", my: 2 }}
                    onClick={handleOpenAnchorElAluno}
                >
                    Alunos
                </Button>
                <Menu
                    anchorEl={anchorElAluno}
                    open={Boolean(anchorElAluno)}
                    onClose={handleCloseAnchorElAluno}
                >
                    <MenuItem
                        onClick={
                            () => {
                                handleCloseAnchorElAluno()
                            }
                        }
                        component={Link}
                        to={"cadastrarAluno"}
                    >
                        Cadastrar
                    </MenuItem>
                    <MenuItem
                        onClick={
                            () => {
                                handleCloseAnchorElAluno()
                            }
                        }
                        component={Link}
                        to={"listarAluno"}
                    >
                        Listar
                    </MenuItem>
                    <MenuItem
                        onClick={
                            () => {
                                handleCloseAnchorElAluno()
                            }
                        }
                        component={Link}
                        to={"listarAprovados"}
                    >
                        Listar Aprovados
                    </MenuItem>

                </Menu>

            </Box>
        )
    }
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"

                        sx={{
                            textDecoration: "none",
                            color: "white",
                            fontFamily: "monospace",
                            letterSpacing: ".3rem",
                            fontWeight: 800
                        }}
                    >
                        CRUD_V1
                    </Typography>
                    <Box sx={{ ml: 10, width: "100%", display: "flex", justifyContent: "end" }}>
                        {dropProfMenu()}
                        {dropAlunMenu()}
                        <Button
                            sx={{
                                color: "white", my: 2
                            }}
                        >
                            Sobre
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        
    )
}

export default MyMenu