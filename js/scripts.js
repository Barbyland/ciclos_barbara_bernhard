alert("Bienvenidos a Barbyland")

let nombreUsuario = prompt("Ingrese su nombre");

let apellidoUsuario = prompt("Ingrese su apellido");

const edadPersona= prompt("ingresa tu edad");

alert ("Bienvenido" + nombreUsuario +" Ahora siga los siguientes pasos");

let entrada =  prompt("SELECCIONAR MÚSICA DE 1 A 4") + "podes poner ESC para salir";
let ingresados = '';
while (entrada != 'ESC') {
    switch (entrada) {
        case "1":
            alert("Jazz");
            break;
        case "2":
            alert("Pop");
            break;
        case "3":
            alert("Rock");
            break;
        case "4":
            alert("Salsa");
            break;
        default:
            alert("Metal");
            break;
    }
    entrada = prompt("SELECCIONAR MUSICA DE 1 A 4");
}





