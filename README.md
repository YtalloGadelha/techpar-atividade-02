# techpar-atividade-02
Atividade 02, treinamento TechPar.

criar aplicativo similar ao da atividade 01 (chamar de "techpar-atividade-02" no github)
as rotas devem ser /list e /save, ambas atendendo no verbo GET do HTTP
a rota /list deverá responder com a saída da consulta ao banco de dados
a rota /save deverá receber os dados via parâmetros de consulta (ex. /save?nomepessoa=joao&telefonepessoa=123456789) e salvar um registro no banco de dados
a resposta da rota /save deve ser o id do registro recém salvo
para interagir com banco de dados deve ser usado o knex.
a instalação e gerência do mesmo deve seguir os moldes do que foi usado na atividade 01, package.json, npm, etc
o knex deve também ser instalado de modo global também (sudo npm -g install knex)
inicializar no projeto "techpar-atividade-02" o knex com knex init
o knex deve recuperar o perfil "development" do knexfile.js criado
instalar com npm as dependências de banco de dados necessárias
usar os migrates do knex para criar o esquema inicial de banco e a carga inicial também
(knex migrate:make esquema_inicial)
(knex migrate:make carga_inicial)
o primeiro migrate deve criar a tabela pessoa(idpessoa,nomepessoa,telefonepessoa)
o segundo migrate deve inserir algumas pessoas na tabela
como criar migrates de definição e manipulação de dados deve ser pprocurado na internet (docs oficiais, blogs, etc) e na
os migrates devem ser executados com knex migrate:latest
