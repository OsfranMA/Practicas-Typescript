"use strict";
// Primera funcion que calcula la velocidad.
function calcularVelocidad(distancia, tiempo) {
    let velocidad = distancia / tiempo;
    return velocidad;
}
;
// Segunda funcion calcula si eres mayor de edad.
function esMayorEdad(edad) {
    let mayorDeEdad = edad >= 18;
    return mayorDeEdad;
}
;
// Tercer funcion estado de un usuario datos basicos de el 
function formatoUsuario(nombre, activo) {
    let estadoUsuario = `El usuario ${nombre} está activo: ${activo}`;
    return estadoUsuario;
}
;
// Cuarta funcion calcula el precio con descuento aplicando su precio base y porsentaje de descuento
function calcularPrecioConDescuento(precioBase, porcentajeDescuento) {
    return precioBase * (porcentajeDescuento / 100);
}
;
// Quinta funcion verificacion utilizando AND && y tiene membresia === true nose si es con 3 o 2 pero pongo 3 porsi acaso, porque si solo pongo uno = sale malo
function verificarAcceso(edad, tieneMembresia) {
    return edad >= 18 && tieneMembresia;
}
;
// Y Sexta funcion mensaje de bienvenida usuario de internet verificando su horas de estudio
function generarMensajeBienvenida(nombre, horasEstudio) {
    return `¡Hola ${nombre}, hoy llevas ${horasEstudio} horas de estudio constante para tu meta en España!`;
}
;
console.log(calcularPrecioConDescuento(100, 20));
console.log(verificarAcceso(19, true));
console.log(generarMensajeBienvenida('Osfran', 23));
//# sourceMappingURL=dia2-semana1.js.map