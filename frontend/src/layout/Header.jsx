import { Cadastro } from "../pages/Cadastro"
import { Home } from "../pages/Home"
import { Usuarios } from "../pages/Usuarios"
import { Burger, FundoMenu, HeaderBar, NavBurger } from "../styles/Styles"
import { Link } from "react-router-dom"
import { useState } from "react"

export const Header = ({active}) => {
    const [burger, setBurger] = useState(false)
    return(
        <>
        <HeaderBar>
            <h1>Usuários</h1>
            <nav>
                <Link to="/" element={<Home/>}>Home</Link>
                <Link to="/usuarios" element={<Usuarios/>}>Usuários</Link>
                <Link to="/cadastro" element={<Cadastro/>}>Cadastro</Link>
            </nav>
            <Burger active={burger} onClick={()=>{setBurger(!burger)}}>
                <span></span>
                <span></span>
                <span></span>
            </Burger>
        </HeaderBar>
            <FundoMenu active={burger}></FundoMenu>
            <NavBurger active={burger}>
                <Link to="/" element={<Home/>} onClick={()=>{setBurger(!burger)}}>Home</Link>
                <Link to="/usuarios" element={<Usuarios/>} onClick={()=>{setBurger(!burger)}}>Usuários</Link>
                <Link to="/cadastro" element={<Cadastro/>} onClick={()=>{setBurger(!burger)}}>Cadastro</Link>
            </NavBurger>
        </>
    )
}