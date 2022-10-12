// let nombre=[{}"Guillo","Fernando","GymBrou","Ñerable","Samuel"];

// let nombresNuevos=nombre.filter(e=>{
//     if(nombre.length>7)
//     {
//         return nombre;
//     }
// })


let nombres=[
{
    nombre:"Guillo",
    edad:"22",
    sexo:"M"
},
{
    nombre:"Fernando",
    edad:"23",
    sexo:"M"
},
{
    nombre:"Gymbrou",
    edad:"21",
    sexo:"M"
},
{
    nombre:"Ñerable",
    edad:"24",
    sexo:"F"
},
{
    nombre:"Samuel",
    edad:"21",
    sexo:"M"
},
];

// Forma de arreglos 2 Filtro

let hombres=nombres.filter(persona=>{
    if(persona.sexo=="M")
    {
        return persona;
    }
})

let hombresJovees=nombres.filter(persona=>{
    if(persona.sexo=="M" && persona.edad<23)
    {
        // return persona;
        console.log("Evaluando a "+persona.nombre);
    }
})


// Forma de arreglos 3 Map

let saludos=nombres.map(persona=>{
    // return `Hola ${persona.nombre} tu edad es de ${persona.edad}`;
    return {nombres:persona.nombre,sueldo:3000};
})

let sueldo=nombres.map(persona=>{
    let sueldo=0;
    if(persona.edad>21)
    {
        sueldo=10000
    }
    return {nombres:persona.nombre,sueldo:sueldo};
})

// Forma de arreglos 4 Find

let Mujer=nombres.find(persona=>{
    if(persona.nombre=="Samuel")
    {
        // return persona.nombre;
        return true;
    }
})

// Forma de arreglos 5 Some

let mayores=nombres.some(persona=>{
    if(persona.edad>25)
    {
        return true;
    }
})

// Cosas Extrañas

let contenedor = document.getElementById("contenedor");
let input = document.querySelector("#input");
let botonito = document.querySelector("#botoncito")

botonito.addEventListener("click",()=>{
    contenedor.innerText=input.value;
    contenedor.className="sombreado";
})

input.addEventListener("keyup",()=>{
    if(input.value.length>3)
    {
        contenedor.innerText=input.value;
        contenedor.className="exito";
    }
    else
    {
        contenedor.innerText="Texto Invalido";
        contenedor.className="falla";
    }
})