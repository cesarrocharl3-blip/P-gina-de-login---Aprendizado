import express from 'express';
import { PrismaClient } from "./generated/prisma/client.js";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use (cors());


const prisma = new PrismaClient();

const usersx = [];

app.get('/usuarios', (req, res) => {
    console.log(req)
    res.send("Olá rota GET acessada com sucesso!");
});

app.get('/usuarios/:id', (req, res) => {
    console.log(req)
    res.send("Route Params acessada com sucesso!");

});  

app.post('/usuarios', (req, res) => {
    console.log(req)
    res.send("Rota POST acessada com sucesso!");
});

//Exemplo na Prática - Criando um banco de dados
app.post('/banco-de-dados', (req, res) => {
    usersx.push(req.body); 
    res.status(201).json({message: "Usuário criado com sucesso!"});
});

app.get('/banco-de-dados', (req, res) => {
    res.status(200).json(usersx);
});










//Criação de usuário - Banco de dados com Prisma / MongoDB
app.post('/prisma', async (req, res) => {
    
    const user =await prisma.user.create({
        data:{
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    });

    res.status(201).json(user);
});

//Lista de usuários - Banco de dados com Prisma / MongoDB
app.get('/prisma', async(req, res) => {
    
    const users = await prisma.user.findMany();
    res.status(200).json(users);
});

//Edição de usuário - Banco de dados com Prisma / MongoDB
app.put('/prisma/:id', async (req, res) => {
    
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    });

    res.status(200).json({message: "Usuário atualizado com sucesso!"});
});

app.delete('/prisma/:id', async (req, res) => {
    
    await prisma.user.delete({
        where: {
            id: req.params.id
        }

    });


    res.status(200).json({message: "Usuário deletado com sucesso!"});
});



app.listen(3000);





