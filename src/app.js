const express = require('express')
const porta = 3000
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile('views/index.html', { root: __dirname})
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}`)
})