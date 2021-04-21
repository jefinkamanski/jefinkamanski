const Atendimento = require('../models/morador')
const Moradores = require('../models/morador')

module.exports = app => {
    
    app.get('/moradores', (req, res) => {
        Moradores.lista(res)
    })

    app.get('/moradores/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Moradores.buscaPorId(id, res)
    })

    app.post('/moradores', (req, res) => {
      const morador = req.body
      Moradores.adiciona(morador, res)
      
    })

    app.put('/moradores/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/moradores/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Moradores.deleta(id, res)
    })
}