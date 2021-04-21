class Tabelas {
    init(conexao) {
        this.conexao = conexao
        console.log('Tabelas foram chamadas')

        this.criarMoradores()
        this.CriarApartamentos()
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

    CriarApartamentos(){
        const sql = 'CREATE TABLE IF NOT EXISTS Apartamentos (id int NOT NULL AUTO_INCREMENT, numero int NOT NULL, bloco varchar(15) NOT NULL, moradores varchar(50), PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log("Tabalea Apartamentos Criada")
            }
        })
    }
}

module.exports = new Tabelas