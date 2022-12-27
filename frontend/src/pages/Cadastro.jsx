import { useState } from "react"
import { Button, Fieldset, Main, Section, DivButton } from "../styles/Styles"

export const Cadastro = () => {

    const [nome, setNome] = useState('')
    const [sexo, setSexo] = useState('')
    const [idade, setIdade] = useState('')
    const [cidade, setCidade] = useState('')
    const [email, setEmail] = useState('')

    const [feedback, setFeedback] = useState([])

    let novoUsuario = {
        nomecompleto: nome,
        sexo,
        idade,
        cidade,
        email,
    }

    const cadastroUsuario = async () =>{
        await fetch('http://localhost:8000/cadastro', {
            method: 'POST',
            body: JSON.stringify(novoUsuario),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then(response => response.json())
        .then(dados => setFeedback(dados.mensagem))
        .catch(error=>console.error(error))
    }

    return (
        <Main>
            <Section>
                <form onSubmit={(e)=>{e.preventDefault(); cadastroUsuario()}}>
                <h3>Cadastrar Novo Usuário</h3>
                <p className={feedback === 'Usuário cadastrado com sucessso!' ? 'sucesso' : feedback === 'Erro ao cadastrar usuário! Tente novamente.' ? 'falha' : undefined}>
                     {feedback === 'Usuário cadastrado com sucessso!' ? "Usuário cadastrado com sucesso!" : feedback === 'Erro ao cadastrar usuário! Tente novamente.' ? "Erro ao cadastrar usuário! Tente novamente." : undefined}
                </p>
                    <Fieldset>
                        <legend>Nome completo:</legend>
                        <input type="text" placeholder="Nome completo" required onChange={(e)=>{setNome(e.target.value)}} />
                    </Fieldset>
                    <Fieldset>
                        <legend>Sexo:</legend>
                        <select defaultValue="Sexo" onChange={(e)=>{setSexo(e.target.value)}} required>
                            <option value="Sexo" disabled>Sexo</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select>
                    </Fieldset>
                    <Fieldset>
                        <legend>Idade:</legend>
                        <input type="number" placeholder="Idade" required onChange={(e)=>{setIdade(e.target.value)}} />
                    </Fieldset>
                    <Fieldset>
                        <legend>Cidade:</legend>
                        <input type="text" placeholder="Cidade" required onChange={(e)=>{setCidade(e.target.value)}} />
                    </Fieldset>
                    <Fieldset>
                        <legend>E-mail:</legend>
                        <input type="email" placeholder="E-mail" required onChange={(e)=>{setEmail(e.target.value)}} />
                    </Fieldset>
                    <DivButton>
                    <Button type="submit">Cadastrar</Button>
                    <Button type="reset" onClick={()=>{setFeedback('')}}>Limpar</Button>
                    </DivButton>
                </form>
            </Section>
        </Main>
    )
}