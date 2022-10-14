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
        amigos.forEach((contacto)=>{
            let amigo=document.createElement("div");
            amigo.innerHTML=`<p>${contacto.nombre}</p><button class="showdetails"><input type="hidden" value="${contacto.telefono}"/>Details</button>`
            lista.appendChild(amigo);
        });
        let botones=document.getElementsByClassName("showdetails");
        for (let i = 0; i < botones.length; i++){
            const elemnt = botones[i];
            elemnt.addEventListener("click",()=>{
                mostrardetalles(elemnt.children[0].value);
            });
        }
    }
    else{
        lista.innerHTML="<h2>No tenemos amigos</h2>"
    }
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
    <button>Cerrar</button>`;
    detalles.classList.remove("oculto");
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
    pintar();
    
    event.preventDefault();
})

