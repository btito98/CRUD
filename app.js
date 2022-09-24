var express = require('express');
var app = express();

const Aluno = require('./aluno');

app.use(express.json());

app.get('/', async function (req, res) {
  const users = await Aluno.findAll();
  res.json(users).status(200);
});



app.delete('/deletar/:id', async (req, res) => {
  const {
    id
  } = req.params
  await Aluno.destroy({
    where: {
      id
    }
  });
  res.status(200).json({
    'Mensage': 'Deletado com sucesso'
  });
})


app.put('/atualizar/:id', async (req, res) => {
  const {id} = req.params
  const {nome, idade} = req.body
    
  if(nome === undefined) {
   return res.status(400).json({"Mensage": "Informar nome"})
  }
  if(idade === undefined){
    return res.status(400).json({"Mensage": "Informar idade"})
  } 
    console.log(nome)
    await Aluno.update({
    nome,
    idade
  }, {
    where: {
      id
    }
  })
  res.status(200).send("Atualização realizada com sucesso")

})





app.post('/cadastrar', async function (req, res) {

  await Aluno.create({
    nome: req.body.nome,
    idade: req.body.idade
  }).then(() => {
    return res.json({
      erro: false,
      mensagem: "Usúarios cadastrado com sucesso!"
    }).status(201)

  }).catch(() => {
    return res.status(404).json({
      erro: true,
      mensagem: "Erro: Usúario não cadastrado"
    })
  })


});



app.listen(8086);