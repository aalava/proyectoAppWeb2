var mysql  = require('mysql');

require('dotenv').config();

var connection = mysql.createConnection({
  host      :   process.env.host,
  database  :   process.env.db,
  user      :   process.env.db_usr,
  password  :   process.env.db_pwd
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});

/*
connection.query('SELECT description from category', function(error, results, fields){
  if (error){
      return reject(error);
  }
  resolve(results);
});


connection.query('SELECT nombres, apellidoPaterno, apellidoMaterno FROM pacientes', function(error, results, fields){
  if (error) throw error;
  //console.log('El nombre del paciente es '+ results[0].nombres + ' '+ results[0].apellidoPaterno + ' ' + results[0].apellidoMaterno);
  //console.log(results);
  //console.log(fields);
  /*
  results.forEach(function(campo) {
    console.log(campo.nombres + ' ' + campo.apellidoPaterno + ' ' + campo.apellidoMaterno);
  });
  /*
  results.forEach(async campo  => {
    const nombres = await campo.nombres;
    console.log(nombres);
  });
});
*/
/*
function getAllProducts(){
  return new Promise(function (resolve, reject){
    connection.query('SELECT name FROM products', function(error, results, fields){
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  })
}

function getAllCategories(){
  return new Promise(function (resolve, reject){
    connection.query('SELECT description from category', function(error, results, fields){
      if (error){
        return reject(error);
      }
      resolve(results);
    });
  })
}

function getProductsByCategories(){
  return new Promise(function (resolve, reject){
    connection.query('SELECT name from products where id_category = 1', function(error,results, fields){
      if (error){
        return reject(error);
      }
      resolve(results);
    });
  })
}

getAllProducts().then(function(results, i=1){
  results.forEach(function(campo) {
    console.log(i + ' ' +campo.name);
    i++;
  });
}).catch((err)=>{
  throw err;
});

getAllCategories().then(function(results, i=1){
  results.forEach(function(campo){
    console.log(i + ' ' +campo.description);
    i++;
  });
}).catch((err)=>{
  throw err;
})

getProductsByCategories().then(function(results, i=1){
  results.forEach(function(campo){
    console.log(i + ' ' + campo.name);
    i++;
  });
}).catch(err=>{
  throw err;
})
*/