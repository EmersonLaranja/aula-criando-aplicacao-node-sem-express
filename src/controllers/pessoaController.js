const Pessoa = require("../models/pessoaModel");

let vetorPessoas = [];
let ultimoID = 0;

function geraID() {
  ultimoID++;
  return ultimoID;
}

function listaTodasPessoas(req, res) {
  res.end(JSON.stringify(vetorPessoas))
}

function criaPessoa(req, res) {
  let corpoRequisicao = '';
  req.on('data', pedaco => {
    corpoRequisicao += pedaco;
  });

  req.on('end', () => {
    const { nome, idade } = (JSON.parse(corpoRequisicao));
    const novaPessoa = new Pessoa(geraID(), nome, idade);
    vetorPessoas.push(novaPessoa);

    res.statusCode = 201;
    res.end(JSON.stringify(novaPessoa));
  });
}

// function mostraPessoa(req, res) {
//   const pessoaID = req.url.split('/')[2];
//   const Pessoa = vetorPessoas.find(u => u.id === parseInt(pessoaID));

//   if (Pessoa) {
//     res.statusCode = 200;
//     res.end(JSON.stringify(Pessoa));
//   } else {
//     naoEncontrado(res);
//   }
// }

// function atualizaPessoa(req, res) {
//   const pessoaID = req.url.split('/')[2]; //['', 'users', 'id']
//   let body = '';
//   req.on('data', pedaco => {
//     body += pedaco;
//   });
//   req.on('end', () => {
//     const { nome, idade } = JSON.parse(body);
//     const posicaoPessoa = vetorPessoas.findIndex(p => p.id === parseInt(pessoaID));
//     if (posicaoPessoa !== -1) {
//       const updatedUsuario = new Pessoa(parseInt(pessoaID), nome, idade);
//       vetorPessoas[posicaoPessoa] = updatedUsuario;
//       res.statusCode = 200;
//       res.end(JSON.stringify(updatedUsuario));
//     } else {
//       naoEncontrado(res);
//     }
//   });
// }

// function deletaPessoa(req, res) {
//   const pessoaID = req.url.split('/')[2];
//   const posicaoPessoa = vetorPessoas.findIndex(u => u.id === parseInt(pessoaID));
//   if (posicaoPessoa !== -1) {
//     const deletedUsuario = vetorPessoas.splice(posicaoPessoa, 1);
//     res.statusCode = 200;
//     res.end(JSON.stringify(deletedUsuario[0]));
//   } else {
//     naoEncontrado(res);
//   }
// }

function naoEncontrado(res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not Found');
}

module.exports = { listaTodasPessoas, criaPessoa, naoEncontrado };