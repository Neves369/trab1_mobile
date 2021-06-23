import Api from "./Api";

const create = (obj) => {
  return new Promise((resolve, reject) => {
    Api.post ("/alunos/", 
    {
    "nome": obj.nome,
    "nota1": obj.nota1,
    "nota2": obj.nota2
    })
    .then(response =>{
      resolve(obj)
    })
    .catch(error => {
      console.log(error)
    })   
  });
};

/**
 * ATUALIZA UM REGISTRO JÁ EXISTENTE
 * - Recebe o ID do registro e um OBJETO com valores atualizados;
 * - Retorna uma Promise:
 *  - O resultado da Promise é a quantidade de registros atualizados;
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
 */
const update = (id, obj) => {
  return new Promise((resolve, reject) => {
  console.log(obj)
  // console.log(id)
 
    Api.put(`/alunos/${id}`,
    {
      "nome": obj.nome,
      "nota1": obj.nota1,
      "nota2": obj.nota2
      })
    .then(response =>{
      resolve(id)
    })
    .catch(error => {
      console.log(error)
    })   
  });
};


// /**
//  * BUSCA TODOS OS REGISTROS DE UMA DETERMINADA TABELA
//  * - Não recebe parâmetros;
//  * - Retorna uma Promise:
//  *  - O resultado da Promise é uma lista (Array) de objetos;
//  *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL;
//  *  - Pode retornar um array vazio caso não existam registros.
//  */
const all = () => {
  return new Promise((resolve, reject) => {
    Api.get('/alunos/')
  .then(function (response) {
    resolve(response.data.alunos)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  });
};

// /**
//  * REMOVE UM REGISTRO POR MEIO DO ID
//  * - Recebe o ID do registro;
//  * - Retorna uma Promise:
//  *  - O resultado da Promise a quantidade de registros removidos (zero indica que nada foi removido);
//  *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
//  */
const remove = (id) => {
  return new Promise((resolve, reject) => {
    Api.delete(`/alunos/${id}`)
    .then(response =>{
      resolve(id)
    })
    .catch(error => {
      console.log(error)
    })   
  });
};

export default {
  create,
  update,
  all,
  remove,
 };
