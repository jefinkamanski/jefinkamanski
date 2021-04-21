const Moradores = require('../models/morador')

module.exports = app => {
    
    app.get('/moradores', (req, res) => {
        Moradores.lista(res)
    })

    app.get('/moradores/:valor', (req, res) => {
        const valor = req.params.valor
        Moradores.buscaPorMorador(valor, res)
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