import { createConnection } from "mysql";
import React from "react";
import env from "react-dotenv";

//var mysql  = require('mysql');
//require('dotenv').config('../.env');

var connection = createConnection({
    host      :   env.host,
    database  :   env.db,
    user      :   env.db_usr,
    password  :   env.db_pwd
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
    return;
    }
});

/*
function GetAllCategories(){
    return (
        <h1>{env.host}</h1>
    )
}
*/

function GetAllCategories(){
    connection.query('SELECT description from category where id = 1', function(error, results, fields){
        return(
            <p>{results}</p>
        )
        });
}

export default GetAllCategories;