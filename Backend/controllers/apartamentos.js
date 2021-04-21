const Apartamentos = require('../models/apartamentos')

module.exports = app => {
    
    app.get('/apartamentos', (req, res) => {
        Apartamentos.lista(res)
    })

    app.get('/apartamentos/:valor', (req, res) => {
        const valor = parseInt(req.params.valor)
        Apartamentos.buscaPorApartamento(valor, res)
    })

    app.post('/apartamentos', (req, res) => {
      const apartamentos = req.body
      Apartamentos.adiciona(apartamentos, res)
      
    })

    app.put('/apartamentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Apartamentos.altera(id, valores, res)
    })

    app.delete('/apartamentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Apartamentos.deleta(id, res)
    })
}