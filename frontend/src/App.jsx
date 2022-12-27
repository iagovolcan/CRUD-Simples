import { Route, Routes } from "react-router"
import { Header } from "./layout/Header"
import { Cadastro } from "./pages/Cadastro"
import { Home } from "./pages/Home"
import { Usuarios } from "./pages/Usuarios"
import { Main } from "./styles/Styles"

export const App = () => {
  return (
    <Main>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/usuarios" element={<Usuarios/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
    </Main>
  )
}