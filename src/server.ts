import express from 'express';

const app = express();

app.use(express.json());

/*
  Rota: Endereço completo da requisição.
  Recurso: Qual entidade estamos acessando no sistema

  GET: Buscar uma ou mais informações do back-end
  POST: Criar uma nova informação no back-end
  PUT: Atualizar uma informação existente no back-end
  DELETE: Remover uma informação do back-end

  POST: http://localhost:3333/users = Criar um usuário
  GET: http://localhost:3333/users = Listar usuários
  GET: http://localhost:3333/users/5 = Buscar dados do usuároi com ID 5
*/

// Requeste Param: Parâmetros que vem na prórpia rota que identificam um recurso
// Query Param: Parãmetros que vem na própria rota geralmente opcinais para filtros, pagição, etc.  
// Request Body: Parãmentros para criação e atualização de informações.

const users = [
  'Davi', //0
  'Lucas', //1
  'Pedro', //2
  'Mãe e Pai' //3
]

app.get('/users', (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
  
  return response.json(filteredUsers);
});

app.get("/users/:id", (request, response) =>{
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});

app.post('/users', (request, response)=> {
  const data = request.body;

  console.log(data);

  const user = {
    name: 'Davi',
    email: 'davissbf@gmail.com'
  };

  return response.json(user);
});

app.listen(3333);