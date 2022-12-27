import { useEffect, useState } from "react"
import { Button, DivScroll, Section, Table, FundoModalEditar, FundoModal, ModalEditar, Fieldset, DivButton } from "../styles/Styles"

export const Usuarios = ({resultado}) => {

    const [usuarios, setUsuarios] = useState([])
    const [openModalEditar, setOpenModalEditar] = useState(false)

    const [nomecompleto, setNomecompleto] = useState('')
    const [sexo, setSexo] = useState('')
    const [idade, setIdade] = useState('')
    const [cidade, setCidade] = useState('')
    const [email, setEmail] = useState('')
    const [buscar, setBuscar] = useState('')

    const [usuarioEditado, setUsuarioEditado] = useState('')
    const [idUsuario, setIdUsuario] = useState('')
    const [feedback, setFeedback] = useState([])

    const [atualizaTela, setAtualizaTela] = useState(0)

    useEffect(()=>{
        const getUsuarios = async () => {
            await fetch('http://localhost:8000/usuarios').then(response => response.json()).then(dados => setUsuarios(dados.result.rows)).catch(error=>console.error(error))
        }

        getUsuarios()
    },[atualizaTela])

    let updateUsuario = {
        nomecompleto,
        sexo,
        idade,
        cidade,
        email,
    }

    const editarUsuario = async (id) => {
        await fetch(`http://localhost:8000/editarusuario/${id}`,{
            method: 'PUT',
            body: JSON.stringify(updateUsuario),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then(response => response.json()).then(result => setFeedback(result.mensagem)).catch(error=>console.error(error))
        setAtualizaTela(atualizaTela + 1)
    }

    const deletarUsuario = async (id, nome) => {
        const confirmar = window.confirm(`Deseja realmente deletar o usuário ${nome}?`)
        if(confirmar){
        await fetch(`http://localhost:8000/deletarusuario/${id}`, {
            method: 'DELETE',
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then(response => response.json()).catch(error=>console.error(error))
        setAtualizaTela(atualizaTela + 1)
    }}

    const buscarUsuario = (expressao) => {
        const expressaoDaBusca = expressao.toLocaleLowerCase()

        const tbody = document.getElementsByTagName('tbody')[0]

        const linhas = tbody.childNodes

        for(let indice = 0; indice < linhas.length; indice++){
            if(!linhas[indice].textContent.toLocaleLowerCase().includes(expressaoDaBusca)){
                linhas[indice].style.display = 'none'
            }else{
                linhas[indice].style.display = ''
            }
        }
    }

    return (
        <>
                <Section>
                    <h3>Usuários</h3>
                    <Section>
                        <form>
                            <Fieldset style={{marginBottom: '20px'}}>
                                <legend>Buscar usuário: </legend>
                                <input type="text" placeholder="Buscar usuário..." onChange={(e)=>{buscarUsuario(e.target.value)}} />
                            </Fieldset>
                        </form>
                    </Section>
                    <DivScroll>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Sexo</th>
                                <th>Idade</th>
                                <th>Cidade</th>
                                <th>E-mail</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usuarios.map((usuario, index)=>
                                    <tr key={index}>
                                        <td>{usuario.id}</td>
                                        <td>{usuario.nomecompleto}</td>
                                        <td>{usuario.sexo}</td>
                                        <td>{usuario.idade}</td>
                                        <td>{usuario.cidade}</td>
                                        <td>{usuario.email}</td>
                                        <td>
                                            <Button onClick={()=>{setOpenModalEditar(!openModalEditar); setNomecompleto(usuario.nomecompleto); setSexo(usuario.sexo); setIdade(usuario.idade); setCidade(usuario.cidade); setEmail(usuario.email); setIdUsuario(usuario.id)}}>Editar</Button>
                                            <Button onClick={()=>{deletarUsuario(usuario.id, usuario.nomecompleto)}}>Deletar</Button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                    </DivScroll>
                </Section>
                <FundoModalEditar activeModal={openModalEditar}/>
                <FundoModal activeModal={openModalEditar}>
                    <ModalEditar activeModal={openModalEditar}>
                    <form onSubmit={(e)=>{e.preventDefault(); editarUsuario(idUsuario)}}>
                <h3>Editar Usuário</h3>
                <p className={feedback === 'Usuário editado com sucesso!' ? 'sucesso' : feedback === 'Erro ao editar usuário! Tente novamente.' ? 'falha' : undefined}>
                     {feedback === 'Usuário editado com sucesso!' ? 'Usuário editado com sucesso!' : feedback === 'Erro ao editar usuário! Tente novamente.' ? 'Erro ao editar usuário! Tente novamente.' : undefined}
                </p>
                    <Fieldset>
                        <legend>Nome completo:</legend>
                        <input type="text" placeholder="Nome completo" defaultValue={nomecompleto} required onChange={(e)=>{setNomecompleto(e.target.value)}} />
                    </Fieldset>
                    <Fieldset>
                        <legend>Sexo:</legend>
                        <select defaultValue={sexo} required onChange={(e)=>{setSexo(e.target.value)}}>
                            <option value="Sexo" disabled>Sexo</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select>
                    </Fieldset>
                    <Fieldset>
                        <legend>Idade:</legend>
                        <input type="number" placeholder="Idade" defaultValue={idade} required onChange={(e)=>{setIdade(e.target.value)}} />
                    </Fieldset>
                    <Fieldset>
                        <legend>Cidade:</legend>
                        <input type="text" placeholder="Cidade" defaultValue={cidade} required onChange={(e)=>{setCidade(e.target.value)}} />
                    </Fieldset>
                    <Fieldset>
                        <legend>E-mail:</legend>
                        <input type="email" placeholder="E-mail" defaultValue={email} required onChange={(e)=>{setEmail(e.target.value)}} />
                    </Fieldset>
                    <DivButton>
                    <Button type="submit">Editar</Button>
                    <Button type="reset" onClick={()=>{setOpenModalEditar(!openModalEditar); setFeedback('')}}>Fechar</Button>
                    </DivButton>
                </form>
                    </ModalEditar>
                </FundoModal>
        </>
    )
}