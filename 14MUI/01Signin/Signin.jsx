import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const navigate = useNavigate()

    //criamos essa função apenas para ir da página de login para a página listar alunos
    function navegar() {
      navigate("/listarAluno")
    }

    return (
        <Container maxWidth = "xs">
            <Box
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    marginTop:8
                    
                }}
            >
                <Typography
                    component="h1"
                    variant="h5"

                >
                    Sign In
                </Typography>
                <TextField
                    required
                    margin="normal"
                    fullWidth
                    // o cursor vai direto para essa parte
                    autoFocus

                    label="Endereço de Email"
                    id="email"
                    name="email"
                    type="email"

                />
                <TextField
                    required
                    margin="normal"
                    fullWidth
                    

                    label="Senha"
                    id="password"
                    name="password"
                    type="password"

                />

                <Button
                    fullWidth
                    variant="contained"
                    // sx={{backgroundColor:"red"}}
                    sx={{
                        my:2,
                    }}
                    //ao clicar ele vai para a página de listar alunos
                    onClick={navegar}
                    
                >
                    Sign In
                </Button>

                <Box
                    sx={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"space-between",
                        width: "100%"
                    }}
                    
                >
                    <Link
                        underline = "none"
                        href="#"
                    >Esqueceu a senha?</Link>
                    <Link
                        underline = "none"
                        href="#"
                    >Cadastre-se</Link>
                </Box>

            </Box>
        </Container>
    )
}

export default Signin;