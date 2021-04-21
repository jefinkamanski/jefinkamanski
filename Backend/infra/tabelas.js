class Tabelas {
    init(conexao) {
        this.conexao = conexao
        console.log('Tabelas foram chamadas')

        this.criarMoradores()
    }

    criarMoradores() {
        const sql = 'CREATE TABLE IF NOT EXISTS Moradores (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, email varchar(50) NOT NULL, nascimento date, telefone varchar(11), cpf varchar(11), PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            }
            else {
                console.log('Tabela Moradores criada com sucesso')
            }
        })
    }

}

module.exports = new Tabelas