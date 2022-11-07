import { createConnection } from "mysql";
import React from "react";
import env from "react-dotenv";

var connection = createConnection({
    host      :   env.host,
    database  :   env.db,
    user      :   env.db_usr,
    password  :   env.db_pwd
});
/*
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
    return;
    }
});
*/
function GetAllCategories() {
    return new Promise(function (resolve, reject){
        connection.query('SELECT name FROM products', function(error, results, fields){
            if (error) {
                return reject(error);
            }
        resolve(results);
        });
    })
}

GetAllCategories().then(function(results, i=1){
    results.forEach(function(campo){
        //console.log(i + ' ' +campo.description);
        return (
            <h1>{campo.description}</h1>
        )
        //i++;
    });
}).catch((err)=>{
    throw err;
})

export default GetAllCategories;