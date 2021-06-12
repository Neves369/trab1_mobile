const client = require("../../index");


exports.CreateAluno = async (req, res) => {
    const { nome, nota1, nota2 } = req.body;
    console.log(nome, nota1, nota2)

    await client.connect();
    const database = client.db("curso");
    const collection = database.collection("alunos");
    const result = await collection.insertOne({
        "nome": `${nome}`,
        "nota1": `${nota1}`,
        "nota2": `${nota2}`
    });
    
    res.status(201).send({
        message: "Aluno adicionado!",
        body: {
          aluno: { nome, nota1, nota2 }
        },
      });
};

//getAll
// (async () => {
//     await client.connect();
//     const database = client.db("curso");
//     const collection = database.collection("alunos");
//     // const result = await collection.insertOne({
//     //     "nome": "Tião",
//     //     "nota1": 7.5,
//     //     "nota2": 9.8
//     // });
//     // console.log(result.insertedId);

//     let alunosCursor = await collection.find({});
//     let alunos =  await alunosCursor.toArray();
//     console.log(alunos)
//     client.close();
// })();