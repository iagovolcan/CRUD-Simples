const { Router } = require('express');
const usuarios = Router('express')
const pool = require('../postgres').pool;

usuarios.post('/cadastro', (req, res, next)=>{
    let nomecompleto = req.body.nomecompleto
    let sexo = req.body.sexo
    let idade = req.body.idade
    let cidade = req.body.cidade
    let email = req.body.email
    pool.query(`INSERT INTO usuarios (nomecompleto, sexo, idade, cidade, email) VALUES ('${nomecompleto}', '${sexo}', ${idade}, '${cidade}', '${email}');`, (error, result, fields)=>{
        if(error){
            res.status(400).json({
                mensagem: "Erro ao cadastrar usuário! Tente novamente.",
                erro: error
            })
        }else{
            res.status(200).json({
                mensagem: "Usuário cadastrado com sucessso!",
                result: result
            })
        }
    })
})

usuarios.get('/usuarios', (req, res, next)=>{
    pool.query('SELECT * FROM usuarios ORDER BY id', (error, result, fields)=>{
        if(error){
            res.status(400).json({
                mensagem: 'Erro ao conectar-se a tabela.',
                erro: error
            });
        }else{
            res.status(200).json({
                mensagem: 'Conectado a tabela com sucesso!',
                result: result
            });
        }
    });
});

usuarios.put('/editarusuario/:id', (req, res, next)=>{
    let id = req.params.id
    let nomecompleto = req.body.nomecompleto
    let sexo = req.body.sexo
    let idade = req.body.idade
    let cidade = req.body.cidade
    let email = req.body.email
    pool.query(`UPDATE usuarios SET nomecompleto = '${nomecompleto}', sexo = '${sexo}', idade = ${idade}, cidade = '${cidade}', email = '${email}' WHERE id = ${id}`, (error, result, fields)=>{
        if(error){
            res.status(400).json({
                mensagem: 'Erro ao editar usuário! Tente novamente.',
                erro: error
            })
        }else{
            res.status(200).json({
                mensagem: 'Usuário editado com sucesso!',
                result: result
            })
        }
    })
})

usuarios.delete('/deletarusuario/:id', (req, res, next)=>{
    let id = req.params.id
    pool.query(`DELETE FROM usuarios WHERE id = ${id}`, (error, result, fields)=>{
        if(error){
            res.status(400).json({
                mensagem: 'Erro ao deletar o usuário!',
                erro: error
            })
        }else{
            res.status(200).json({
                mensagem: 'Usuário deletado com sucesso!',
                result: result
            })
        }
    })
})
module.exports = usuarios;