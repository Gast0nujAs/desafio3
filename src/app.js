import express from "express";
import ProductManager from "./ProductManager.js";

const productManager = new ProductManager("./products.json")

const app = express();
const PORT = 8080;

app.get("/", (req, res)=>{
    res.send("hola mundo,");
});

app.get("/products", (req,res)=>{
    let temporalProducts = products;
    const {limit} = req.query;
    if(limit){
        temporalProducts = temporalProducts.slice(0, +limit);
    }
    res.json({
        msg: "Lista Productos",
        data: temporalProducts,
        limit: limit ? limit : "false",
        

    })
})

app.listen(PORT, ()=>{
    console.log(`escuchando desde http:localhost:${PORT}`)
})


let products = [
    {
        id: 1,
        titulo: "Talco",
        descripcion: "Polvo para pies",
        precio: 10,
        imagen: "Sin imagen",
        stock: 10
    },
    {
        id:2,
        titulo: "Leche",
        descripcion: "Leche entera",
        precio: 15,
        imagen: "Sin imagen",        
        stock: 15
    },
    {
        id:3,
        titulo: "Café",
        descripcion: "Café torrado",
        precio: 20,
        imagen: "Sin imagen",
        stock: 20
    },
    {
        id:4,
        titulo: "Mate cocido",
        descripcion: "En saquitos",
        precio: 25,
        imagen: "Sin imagen",
        stock: 25
    }
]