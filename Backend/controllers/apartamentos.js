const Apartamentos = require('../models/apartamentos')

module.exports = app => {
    
    app.get('/apartamentos', (req, res) => {
        Apartamentos.lista(res)
    })

    app.get('/apartamentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Apartamentos.buscaPorId(id, res)
    })

    app.post('/apartamentos', (req, res) => {
      const morador = req.body
      Apartamentos.adiciona(morador, res)
      
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