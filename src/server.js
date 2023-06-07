const http = require('http');
const resolveRequisicoes = require('./rotas');

const HOST = '127.0.0.1';
const PORT = 3000;

const server = http.createServer(resolveRequisicoes);

server.listen(PORT, HOST, () => {
  console.log(`Servidor rodando em http://${HOST}:${PORT}/`);
});
