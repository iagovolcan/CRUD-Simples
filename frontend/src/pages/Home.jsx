import { Card, Main, Section } from "../styles/Styles"
import UsuariosIcon from "../layout/img/usuarios.png"
import CadastroIcon from "../layout/img/cadastro.png"
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <Main>
            <Section style={{zIndex: '1'}}>
                <div>
                <Link to="/usuarios">
                    <Card>
                        <img src={UsuariosIcon} alt="Ver Usuários" />
                        <h3>Ver Usuários</h3>
                    </Card>
                </Link>
                </div>
                <div>
                <Link to="/cadastro">
                    <Card>
                        <img src={CadastroIcon} alt="Cadastrar Novo Usuário" />
                        <h3>Cadastrar Usuário</h3>
                    </Card>
                </Link>
                </div>
            </Section>
        </Main>
    )
}