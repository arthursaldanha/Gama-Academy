"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importação das bibliotecas
var http_1 = require("http");
var fs_1 = require("fs");
var url = __importStar(require("url"));
var query_string_1 = require("query-string");
//Definição de porta
var port = 5000;
var server = http_1.createServer(function (request, response) {
    var urlparse = url.parse(request.url ? request.url : '', true);
    var params = query_string_1.parse(urlparse.search ? urlparse.search : ''); // Receber informações do usuário
    var resposta;
    if (urlparse.pathname == '/criar-atualizar-usuario') {
        // Salvar informações
        fs_1.writeFile('./users/' + params.id + '.txt', JSON.stringify(params), function (err) {
            if (err)
                throw err;
            console.log('Saved!');
            resposta = "Usuario criado com sucesso";
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);
        });
    }
    // Selecionar um usuário
    else if (urlparse.pathname == '/selecionar-usuario') {
        fs_1.readFile('./users/' + params.id + '.txt', function (err, data) {
            resposta = data;
            console.log(data);
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(resposta);
        });
    }
    // Remover um usuário
    else if (urlparse.pathname == '/remover-usuario') {
        fs_1.unlink('./users/' + params.id + '.txt', function (err) {
            console.log('File deleted!');
            resposta = err ? "Usuario nao encontrado." : "Usuario removido.";
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
        });
    }
});
// Execução
server.listen(port, function () {
    console.log("Server running on port " + port);
});
// http://localhost:5000/criar-atualizar-usuario?nome=Arthur&idade=19&id=1
// http://localhost:5000/criar-atualizar-usuario?nome=Arthur&idade=21&id=1
// http://localhost:5000/selecionar-usuario?id=1
// http://localhost:5000/remover-usuario?id=1
