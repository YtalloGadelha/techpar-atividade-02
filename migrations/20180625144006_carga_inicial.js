// migrations/20180625144006_carga_inicial
exports.up = knex => knex("pessoa").insert({ idpessoa: 1, nomepessoa: "Ytallo", telefonepessoa: "123456789"})

exports.down = knex => knex("pessoa").del().where({ idpessoa: 1 })
