############################################################################################
#                                   CRUD Simples                                           #
############################################################################################

# Sobre o projeto:
    Apenas um CRUD(Create, Read, Update e Delete) simples para "criação", "leitura", "atualização" e "deleção" de cadastro de usuários.
    Projeto criado para aprendizagem de CRUD em algumas tecnologias web.

# Tecnologias usadas:
    > No BACK-END:
        - Node.js
        - Express
        - Body-Parser
        - Cors
        - Nodemon
        - PostgreSQL

    > No FRONT-END:
        - React
        - React-Router-Dom
        - Styled-Components

# Como Utilizar:
    > No BACK-END:
        > Como utilizá-lo usando um banco de dados na própia maquina:
            - PASSO 1: Abra a pasta "backend" com seu terminal de preferência e rode um "npm install" para instalar as dependências.

            - PASSO 2: No arquivo package.json adicione a seguinte linha na parte "scripts":
                
                "start": "nodemon server.js"

            - PASSO 3: Após a alteração no "package.json", ainda com seu terminal aberto na pasta "backend", rode o seguinte comando: "npm start"(sem aspas) para rodar o servidor.

            - PASSO 4: No seu banco de dados (PostgreSQL) crie o banco de dados "crud" com o seguinte comando:

                CREATE DATABASE crud;

            - PASSO 5: Após a criação do banco de dados rode no psql o comando "\c crud;"(sem aspas) para selecionar o banco de dados que foi criado.
    
            - PASSO 6: Com o banco de dados selecionado com o comando do passo cinco, crie nele a seguinte tabela com o seguinte comando:

                CREATE TABLE usuarios (id SERIAL PRIMARY KEY, nomecompleto VARCHAR(100) NOT NULL, sexo VARCHAR(10) NOT NULL, idade INT NOT NULL, cidade VARCHAR(50) NOT NULL, email VARCHAR(50) NOT NULL);

            - PASSO 7: Após a criação do banco de dados e da tabela, edite o arquivo "postgres.js" da pasta "backend" trocando o nome de usúario(user)(linha 4, coluna 12) pelo seu nome de usuário do banco de dados. Troque sua senha na parte "password"(linha 5, coluna 16) pela senha do seu usuário postgres. Troque a parte "host"(linha 6, coluna 12) para a rota que você usará, normalmente é "localhost".
        

    > No FRONT-END:
        - PASSO 1: Abra a pasta "frontend" com seu terminal de preferência e rode um "npm install" para instalar as dependências.

        - PASSO 2: Abra o seu terminal na pasta "frontend" e rode o seguinte comando: "npm run dev"(sem aspas) para rodar o servidor do frontend e poder acessa-lo na na URL http://localhost:5173

# Finalização:

    > Código criado para inspiração, treinamento e para disponibilizar a comunidade GitHub.

Feito com carinho por Iago Volcan - 27/12/2022