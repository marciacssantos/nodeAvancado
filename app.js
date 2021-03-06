const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const buscaCep = require('./src/functions/buscaCep')
const buscaEstado = require('./src/functions/buscaEstado')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.get('/', (req, res) =>{
    res.render('index')
})

app.post("/envia-cep", async(req, res) =>{
    const{ cep } = req.body
    const resultado = await buscaCep(cep)
  
    res.render('resultado', {dado: resultado})
})

app.post("/envia-uf", async(req, res) =>{
    const{ uf } = req.body
    const resultadoUf = await buscaEstado(uf)
  
    res.render('resultadoUf', {dado: resultadoUf})
})

app.listen(3333)