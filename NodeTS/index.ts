// Importação das bibliotecas
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { writeFile, readFile, unlink } from 'fs';
import * as url from 'url';
import { parse } from 'query-string';

//Definição de porta
const port = 5000

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
   const urlparse = url.parse(request.url ? request.url : '', true);
   const params = parse(urlparse.search ? urlparse.search : ''); // Receber informações do usuário

   var resposta
   
   if (urlparse.pathname == '/criar-atualizar-usuario') {
      
      // Salvar informações
      writeFile('./users/' + params.id + '.txt', JSON.stringify(params), function (err: any) {
         if (err) throw err;
         console.log('Saved!');
         resposta = "Usuario criado com sucesso";

         response.statusCode = 200;
         response.setHeader('Content-Type', 'text/plain');
         response.end(resposta);
      });
   }
   // Selecionar um usuário
   else if (urlparse.pathname == '/selecionar-usuario') { 
      readFile('./users/' + params.id + '.txt', function (err: any, data) {
         resposta = data
         console.log(data);

         response.statusCode = 200;
         response.setHeader('Content-Type', 'application/json');
         response.end(resposta);
      });
   }
   // Remover um usuário
   else if (urlparse.pathname == '/remover-usuario') { 
      unlink('./users/' + params.id + '.txt', function (err: any) {
         console.log('File deleted!');

         resposta = err ? "Usuario nao encontrado." : "Usuario removido.";

         response.statusCode = 200;
         response.setHeader('Content-Type', 'text/plain');
       }); 
   }
});

// Execução
server.listen(port, () => {
   console.log(`Server running on port ${port}`);
});
// http://localhost:5000/criar-atualizar-usuario?nome=Arthur&idade=19&id=1
// http://localhost:5000/criar-atualizar-usuario?nome=Arthur&idade=21&id=1
// http://localhost:5000/selecionar-usuario?id=1
// http://localhost:5000/remover-usuario?id=1