const express = require('express');
const produtoRoutes = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


// #################### PRODUTOS ####################

// C
produtoRoutes.post("/produtos", async (req, res) => {
    const { nome, preco, descricao, quantidade } = req.body;
    const produto = await prisma.produto.create({data: {
        nome,
        preco,
        descricao,
        quantidade,
    }});
    res.status(201).json(produto);
});


// R
produtoRoutes.get("/produtos", async (req, res) => {
    const produtos = await prisma.produto.findMany();
    res.status(200).json(produtos);
});


// U
produtoRoutes.put("/produtos", async (req, res) => {
    const { id, nome, preco, descricao, quantidade } = req.body;

    if(!id){
        return res.status(400).json({error: "ID não informado"});
    }

    const produtoAlreadyExists = await prisma.produto.findUnique({
        where: {
            id
        }
    });

    if(!produtoAlreadyExists){
        return res.status(400).json({error: "Produto não encontrado"});
    }

    const produto = await prisma.produto.update({
        where: { id },
        data: {
            nome,
            preco,
            descricao,
            quantidade,
        }
    });
    res.status(200).json(produto);
});

// D
produtoRoutes.delete("/produtos/:id", async (req, res) => {
    const { id } = req.params;

    const intId = parseInt(id);
    
    if(!intId){
        return res.status(400).json({error: "ID não informado"});
    }

    const produtoAlreadyExists = await prisma.produto.findUnique({
        where: {
            id: intId
        }
    });

    if(!produtoAlreadyExists){
        return res.status(400).json({error: "Produto não encontrado"});
    }

    const produto = await prisma.produto.delete({
        where: { id: intId }
    });
    res.status(200).json(produto);
});


module.exports = produtoRoutes;