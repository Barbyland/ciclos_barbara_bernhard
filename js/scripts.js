alert("Bienvenidos a Barbyland")
 
let nombreUsuario = prompt("Ingresá tu nombre");
console.log(nombreUsuario)
 
let apellidoUsuario = prompt("Ingresá tu apellido");
console.log(apellidoUsuario)
 
alert ("Bienvenido " + nombreUsuario +" Ahora seguí los siguientes pasos");
 
const fechaNacimiento = document.getElementById("fechaNacimiento");
const edad = document.getElementById("edad");
 
const calcularEdad = (fechaNacimiento) => {
    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());
 
    // 2022-07-11
    const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));
 
    let edad = anoActual - anoNacimiento;
    if (mesActual < mesNacimiento) {
        edad--;
    } else if (mesActual === mesNacimiento) {
        if (diaActual < diaNacimiento) {
            edad--;
        }
    }
    return edad;
};
 
window.addEventListener('load', function () {
 
    fechaNacimiento.addEventListener('change', function () {
        if (this.value) {
            edad.innerText = `La edad es: ${calcularEdad(this.value)} años`;
        }
    });
 
});


const generosMusicales = ["rock","pop","punk","metal","punk"];

console.log( generosMusicales.indexOf('rock') ) // ⇒ 0
console.log( generosMusicales.indexOf('metal') ) // ⇒ 3
console.log( generosMusicales.indexOf('indie') ) // ⇒ -1







