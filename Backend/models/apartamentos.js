
const moment = require('moment')
const conexao = require('../infra/conexao')

class Apartamentos {

    adiciona(apartamentos, res) {


       const moradoresValido = apartamentos.moradores.length > 0

        const validacoes = [
            {
                nome: 'Moradores: ' + apartamentos.moradores,
                valido: moradoresValido,
                mensagem: 'É necessário ter ao menos 1 morador por apartamento'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if (existemErros) {
            res.status(400).json(erros)
        } else {
            const sql = 'INSERT INTO Apartamentos SET ?'

            conexao.query(sql, apartamentos, (erro, resultados) => {
                if (erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(`Apartamento ${apartamentos.numero} cadastrado.`)
                }

            })
        }

    }

    lista(res) {
        const sql = 'SELECT * FROM Apartamentos'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Apartamentos WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const morador = resultados[0]
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(morador)
            }
        })
    }

    altera(id, valores, res) {

        const sql = 'UPDATE Apartamentos SET ? WHERE id = ?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(`Apartamento ${valores.numero} alterado.`)
            }
        })
    }

    deleta(id, res) {

        const sql = 'DELETE FROM Apartamentos WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(`Apartamento Numero: ${id} deletado.`)
            }
        })
    }
}

module.exports = new Apartamentos