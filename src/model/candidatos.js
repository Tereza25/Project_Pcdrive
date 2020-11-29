const mongoose = require("mongoose");

const candidatosSchema = new mongoose.Schema(


{   
    id: {type : Number},
    nome: {type : String},
    nascimento: {type : String},
    genero: {type : String},
    raca: {type : String},
    localidade: {type : String},
    escolaridade: {type : String},
    lingua: {type : String},
    experiencia: {type : Boolean},
    area: {type : Array},
    fone: {type : String},
    email: {type : String},
    status: {type : String}
},
{
        versionKey: false,   
       }
       );
       
       // atribuindo o esquema a uma collection
       // definindo o nome da collection que irei salvar no banco
       const candidatos = mongoose.model("candidatos", candidatosSchema)
       
       // exportar o model para ser utilizado
       
       module.exports = candidatos;
       