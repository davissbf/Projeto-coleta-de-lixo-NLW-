import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

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

//SELECT * FROM users where name = 'Davi';
//knex('users').where('name', 'Davi').select('*');



// 1:01:35