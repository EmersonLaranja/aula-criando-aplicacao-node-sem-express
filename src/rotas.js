
const { listaTodasPessoas, criaPessoa, mostraPessoa, atualizaPessoa, deletaPessoa } = require('./controllers/pessoaController');

function resolveRequisicoes(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/users' && req.method === 'GET') {
    listaTodasPessoas(req, res);
  }

  else if (req.url === '/users' && req.method === 'POST') {
    criaPessoa(req, res);
  }

  else if (req.url.startsWith('/users/') && req.method === 'GET') {
    mostraPessoa(req, res);
  }

  else if (req.url.startsWith('/users/') && req.method === 'PUT') {
    atualizaPessoa(req, res);
  }

  else if (req.url.startsWith('/users/') && req.method === 'DELETE') {
    deletaPessoa(req, res);
  }

  else {
    naoEncontrado(res);
  }
}


module.exports = resolveRequisicoes;