//menu sem dropdow
//position static é para quando vc rolar a página o menu continuar no mesmo lugar

import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb"

const MyMenu = () => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <AdbIcon sx={{ display:{xs:"none", md:"flex"}, mr: 1 }} />
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
                        CRUD_V0
                    </Typography>
                    <Box sx={{ml:10, width:"100%", display:"flex", justifyContent:"end"}}>
                        <Button
                            sx={{
                                color: "white", my: 2
                            }}
                        >
                            Professores
                        </Button>
                        <Button
                            sx={{
                                color: "white", my: 2
                            }}
                        >
                            Alunos
                        </Button>
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