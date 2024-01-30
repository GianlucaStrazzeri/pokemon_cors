const express = require("express");
const axios= require("axios");
const app=express();
const cors=require("cors");//cors nos permite que las demas url entren a nuestra pagina y luego con las cabecera le diremos donde tienen que ir

app.use(cors())//es un middleware con lo que así lo aplico a todas mis rutas
app.get(`/pokemon/:PokemonName/`, async (req,res)=>{
    const pokemonName=req.params.PokemonName
    const url= `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    try{
       const response= await axios.get(url)
       const {name, sprites:{front_default} , height, weight}=response.data//este destructuring nos sirve para sacar solo una parte de la información de la api
    res.json({name, sprites:{front_default} , height, weight})
    }catch(ERROR){
res.status(404).json({error:"pokemon no encontrado"})
    }
})

app.listen(3002,()=>{
    console.log("Express escuchando en el puerto http://localhost:3002")
})