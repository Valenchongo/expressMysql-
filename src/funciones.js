const nombre = document.querySelector("#nombre");
const numero = document.querySelector("#numero");
const btnAgregar = document.querySelector("#btn_agregar");
const btnBorrar = document.getElementsByClassName("borrar");

btnAgregar.addEventListener("click",()=>{
    window.location.href = `agregar/${nombre.value}/${numero.value}`
})  

for( let i of btnBorrar){
        i.addEventListener("click",()=>{
            let id = i.getAttribute("id");  //sacamos el atributo id que esta en el html de cada boton botrrar
            window.location.href =`/borrar/${id}`
            console.log(id)
        })
}
/*esto hace que cuando le demos click agarre el nombre 
     y el numero y se lo pasa a la url /agregar*/ 