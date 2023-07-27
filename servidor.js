const http = require('http');

http.createServer(function(request, response){
    if(request.url === "/"){
        response.statusCode = 200
    response.write("Bem vindo");
    }
    else if(request.url === "/alunos"){
        response.statusCode = 202
        response.write('["joao", "maria", "diego"]');
    }
    else{
        response.statusCode = 404
        response.write('nao encontrado');
    }
        
    

    response.end();


}).listen(3000);
