//importar mysql

import mysql from "mysql";
let todos;

//crearmos la coneccion

const conector = mysql.createConnection(
    {
      host :"localhost",
      user: "valentin",
      password: "123456",
      database: "agenda contactos"
    }
);

const conectar = () =>{
    conector.connect(err=>{    //esta es la funion conectar, le pasamos el conector.conect que hace que se conecte, si da error lo lanzay si no sigue la app
        if(err) throw err;
        console.log("conectado")
    })
}

//agregar datos a mysql

const agregarContacto = (numero , nombre) =>{
    const sql = `INSERT INTO AGEND (id_agenda , numero_contacto, nombre_contacto) values (${null},${numero},"${nombre}")`
    conector.query(sql, function(err, resultado, filed){ //(conector es la primera funcion q creamos)
          if(err) throw err
          

    })
}

//obtener contactos de mysql

const obtenerContactos = ()=>{
   const sql = "SELECT * FROM AGEND"
    conector.query(sql, function(err, result,filed){  
       todos = result;   //el resultado de todos los contactos pasa a ser la variable todos y luego la devolvemos con el return de mas abajo
   })
   return todos;
  
}

//borrar datos

const borrarContacto = (id) =>{
    const sql = `DELETE FROM AGEND WHERE id_agenda=${id}`
    conector.query(sql)
}


export{conectar, agregarContacto, obtenerContactos,borrarContacto};
