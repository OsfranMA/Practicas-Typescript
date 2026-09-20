// Primera funcion que calcula la velocidad.
function calcularVelocidad(distancia: number, tiempo: number) {
    let velocidad: number = distancia / tiempo;
    return velocidad;
};

// Segunda funcion calcula si eres mayor de edad.
function esMayorEdad(edad: number) {
    let mayorDeEdad: boolean = edad >= 18;
    return mayorDeEdad;
};

// Tercer funcion estado de un usuario datos basicos de el 
function formatoUsuario(nombre: string, activo: boolean) {
    let estadoUsuario: string = `El usuario ${nombre} está activo: ${activo}`;
    return estadoUsuario;
};

// Cuarta funcion calcula el precio con descuento aplicando su precio base y porsentaje de descuento
function calcularPrecioConDescuento(precioBase: number, porcentajeDescuento: number) : number {
    return precioBase * (porcentajeDescuento / 100);
};

// Quinta funcion verificacion utilizando AND && y tiene membresia === true nose si es con 3 o 2 pero pongo 3 porsi acaso, porque si solo pongo uno = sale malo
function verificarAcceso(edad: number, tieneMembresia: boolean) : boolean {
    return edad >= 18 && tieneMembresia;
};

// Y Sexta funcion mensaje de bienvenida usuario de internet verificando su horas de estudio
function generarMensajeBienvenida(nombre: string, horasEstudio: number) : string {
    return `¡Hola ${nombre}, hoy llevas ${horasEstudio} horas de estudio constante para tu meta en España!`;
};

console.log(calcularPrecioConDescuento(100, 20));
console.log(verificarAcceso(19, true));
console.log(generarMensajeBienvenida('Osfran', 23));