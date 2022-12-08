let amigos=[];

let btnguardar=document.querySelector("#btnguardar");
let btncancelar=document.querySelector("#btncancelar");




let lista=document.querySelector(".listaAmigos");
let formulario=document.querySelector("#formulario");

pintar();

function limpiar(){
    formulario[0].value="";
    formulario[1].value="";
    formulario[2].value="";
    formulario[3].value="";
}

function pintar(){
    if(amigos.length>0)
    {
        lista.innerHTML="";
        amigos.forEach((contacto,index)=>{
            let amigo=document.createElement("div");
            amigo.innerHTML=`<p>${contacto.nombre}</p><button class="showdetails"><input type="hidden" value="${contacto.telefono}"/>Details</button><button class="deletecon" ele="${index}">Eliminar</button>`
            lista.appendChild(amigo);
        });
        let botones=document.getElementsByClassName("showdetails");
        for (let i = 0; i < botones.length; i++){
            const elemnt = botones[i];
            elemnt.addEventListener("click",()=>{
                mostrardetalles(elemnt.children[0].value);
            });
        }
        
        botones=document.getElementsByClassName("deletecon");
        let avisar=document.getElementById("deseaseliminar");
        for (let i = 0; i < botones.length; i++){
            const elemnt = botones[i];
            elemnt.addEventListener("click",()=>{
                // avisar.innerHTML=`<h3>¿Estas Seguro?</h3>
                // <button class="si">SI</button>
                // <button class="no">NO</button>`
                // avisar.classList.remove("ocultar")
                amigos.splice(elemnt.getAttribute("ele"),1);
                pintar();
            });
        }
    }
    else{
        lista.innerHTML="<h2>No tenemos amigos</h2>"
    }
}

function cerrardetalles(tel){
    let detalles=document.getElementById("btncerrar");
    let amigo=amigos.find(a=>{
        if(a.telefono==tel)
        {
            return a
        }
    });
    detalles.classList.add("oculto");
}



function mostrardetalles(tel){
    let detalles=document.getElementById("detallesamigos");
    let amigo=amigos.find(a=>{
        if(a.telefono==tel)
        {
            return a
        }
    });

    detalles.innerHTML=`<img src="${amigo.foto}" alt="">
    <h3>${amigo.nombre}</h3>
    <p><span>Telefono:</span> ${amigo.telefono}</p>
    <p><span>Correo:</span> ${amigo.correo}</p>
    <button id="btncerrar">Cerrar</button>`;
    detalles.classList.remove("oculto");
    esconderdetails();
}

function esconderdetails(){
    let ocultar=document.getElementById("btncerrar");
    ocultar.addEventListener("click", ocultar=>
    {
        
        let ventana=document.getElementById("detallesamigos")
        ventana.classList.add("oculto");
    });
}

btncancelar.addEventListener("click",(event)=>{
    limpiar();
    event.preventDefault();
});


btnguardar.addEventListener("click",(event)=>{
    if(formulario[0].value!=""&&
    formulario[1].value!=""&&
    formulario[2].value!=""&&
    formulario[3].value!=""){
        
    
    
    let contacto={
        nombre:formulario["nombre"].value,
        telefono:formulario["telefono"].value,
        correo:formulario["correo"].value,
        foto:formulario["foto"].value
    };

    amigos.push(contacto);
    limpiar();
    pintar();
    event.preventDefault();
}
else{
    event.preventDefault();
    alert("Llena todos los campos")
}
})

function eliminarcontacto(tel){
    let borrar=document.getElementsByClassName("si");
        for (let i = 0; i < borrar.length; i++){
            const elemnt = borrar[i];
            elemnt.addEventListener("click",()=>{
                eliminarcontacto(elemnt.children[0].value);
            });
        }
        alert("anda bien")
}

