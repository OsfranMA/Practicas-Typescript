"use strict";
// funcion que verifica acceso. Se ingresa su Id puede ser string o number, y si el usuario no verifica si es Administrador se pone valor por defecto.
function verificarNivelAcceso(id, esAdmin = false) {
    return `Acceso concedido para el usuario ${id} (Admin: ${esAdmin ? true : false})`;
}
;
console.log(verificarNivelAcceso(7832784533, true));
console.log(verificarNivelAcceso(7832784533));
// funcion similar a la que realize el dia3-semna1 que consiste en pasar una lista de notas de 4 parciales y luego te devuelv tu promedio.
function calcularPromedioCalificaciones(calificacion) {
    return (calificacion[0] + calificacion[1] + calificacion[2] + calificacion[3]) / 4;
}
;
console.log(calcularPromedioCalificaciones([89, 93, 89, 79]));
// funcion que muestra un tipo de error de sistema.
function mostrarAlertaSistema(mensaje, codigo) {
    if (codigo !== undefined) {
        console.log(`${mensaje} su alerta de sistemas. Su codigo: ${codigo}`);
    }
    else {
        console.log(`${mensaje} su alerta de sistemas.`);
    }
}
;
mostrarAlertaSistema('Mensaje');
mostrarAlertaSistema('Mensaje', 401);
//# sourceMappingURL=dia5-semana1.js.map