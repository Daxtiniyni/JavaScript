let amigos=[];

let btnguardar=document.querySelector("#btnguardar");
let btncancelar=document.querySelector("#btncancelar");




let lista=document.querySelector(".listaAmigos");
let formulario=document.querySelector("#formulario");


function limpiar(){
    formulario[0].value="";
    formulario[1].value="";
    formulario[2].value="";
    formulario[3].value="";
}

btncancelar.addEventListener("click",(event)=>{
    limpiar();
    event.preventDefault();
});

btnguardar.addEventListener("click",(event)=>{
    
    let contacto={
        nombre:formulario["nombre"].value,
        telefono:formulario["telefono"].value,
        correo:formulario["correo"].value,
        foto:formulario["foto"].value
    };

    amigos.push(contacto);
    limpiar();
    
    
    event.preventDefault();
})