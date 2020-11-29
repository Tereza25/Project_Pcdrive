const mongoose = require("mongoose");

const empresasSchema = new mongoose.Schema(

{   
    id: {type : Number},
    razaoSocial: {type : String},
    nomeFantasia: {type : String},
    cnpj: {type : String},
    porte: {type : String},
    localidade: {type : String},
    areaAtuacao: {type : String},
    fone: {type : String},
    email: {type : String},
    acessibilidade: {type : Boolean}
},
{
        versionKey: false,   
       }
       );
       
       // atribuindo o esquema a uma collection
       // definindo o nome da collection que irei salvar no banco
       const empresas = mongoose.model("empresas", empresasSchema)
       
       // exportar o model para ser utilizado
       
       module.exports = empresas;