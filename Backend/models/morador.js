const moment = require('moment')
const conexao = require('../infra/conexao')

class Moradores {

    adiciona(morador, res) {

        const nascimento = moment(morador.nascimento, 'DD/MM/YYYY HH:MM:SS').format('YYYY-MM-DD HH:MM:SS')

        const nomeValido = morador.nome.length >= 8

        const validacoes = [
            {
                nome: 'Nome: ' + morador.nome,
                valido: nomeValido,
                mensagem: 'Nome deve ter pelo menos 8 caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if (existemErros) {
            res.status(400).json(erros)
        } else {
            const moradorFormatado = { ...morador, nascimento }

            const sql = 'INSERT INTO Moradores SET ?'

            conexao.query(sql, moradorFormatado, (erro, resultados) => {
                if (erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(`Morador ${morador.nome} cadastrado.`)
                }

            })
        }

    }

    lista(res) {
        const sql = 'SELECT * FROM Moradores'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Moradores WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const morador = resultados[0]
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(morador)
            }
        })
    }

    
    buscaPorMorador(valor, res) {

        const sql = `SELECT * FROM Moradores WHERE id LIKE '${valor}%' or nome LIKE '${valor}%' or email LIKE '${valor}%' or telefone LIKE '${valor}%' or cpf LIKE '${valor}%' ` 

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })

    }

    altera(id, valores, res) {

        if (valores.nascimento) {
            valores.nascimento = moment(valores.nascimento, 'DD/MM/YYYY HH:MM:SS').format('YYYY-MM-DD HH:MM:SS')
        }

        const sql = 'UPDATE Moradores SET ? WHERE id = ?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(`Morador ${valores.nome} alterado.`)
            }
        })
    }

    deleta(id, res) {

        const sql = 'DELETE FROM Moradores WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(`Morador ${id} deletado.`)
            }
        })
    }
}

module.exports = new Moradores