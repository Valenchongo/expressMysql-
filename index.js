import express from "express"; //importamos express
import{ agregarContacto, obtenerContactos,borrarContacto, conectar} from "./src/mysql_conector.js"; //importamos lo q esta dentro de el archivo mysql_conector
let todos;
const app = express(); //iniciamos express


//iniciamos el servidor
app.listen("8000", ()=>{  //le decis q se conecte al puerto 8000 y que haga la sig funcion
    console.log("app corriendo")
});


//configuracion de pug

app.set("views", "./vistas"); //le decimos q las vistas las agarrara de la carpeta vistas
app.set("view engine", "pug");// le decimos q el renderizado de html sera hecho con pug

// configuracion de archivos estaticos

app.use(express.static("./vistas"));
app.use(express.static("./src"));
app.use(express.static("./css"));




app.get("/",  async function (req,res){  //con el get le decimos q en la ruta / ejecute la siguiente funcion
    todos = await obtenerContactos();
    res.render("index", {titulo:"aplicacion de contactos", contactos:todos}) // le decimos el nombre del archuivio que queremos que renderise desde la carpeta vistas que ya le dijimos antes    
    console.log(obtenerContactos())
})    
//lo que ponemos dentro del render por ejemplo el titulo se queda guardado cmo una variable



//rutas

app.get("/agregar/:nombre/:numero" , function(req, res){
    let nombre = req.params.nombre;    //esto viene de la parte de funciones
    let numero = req.params.numero;
    agregarContacto(numero, nombre);
    todos =  obtenerContactos();
    res.redirect("/");
    
    
   
   
})

app.get("/borrar/:id",  function async(req, res){
    let id = req.params.id;
    borrarContacto(id);
    todos =  obtenerContactos();
    res.redirect("/");
    
   
   
    
   
})