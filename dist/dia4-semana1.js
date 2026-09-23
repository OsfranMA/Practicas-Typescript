"use strict";
// funcion que evalua texto occional la cual es (hora?) su funcion es que se
// debe reguistrar siempre la materia pero horas de estudio puede ser occional.
function crearPerfilEstudio(materia, horas) {
    if (horas) {
        return `Estudiando ${materia} por ${horas} horas hoy.`;
    }
    else {
        return `Estudiando ${materia} hoy`;
    }
    ;
}
;
console.log(crearPerfilEstudio('Matematicas'));
console.log(crearPerfilEstudio('Logica Computacional', 3));
// función que gestiona progreso en estudio con datos por defecto e occionales.
function gestionarProgresoEstudio(materia, horasRegistradas, nivelDificultad = 'Intermedio') {
    if (horasRegistradas) {
        return `Materia: ${materia}. | Dificultad: ${nivelDificultad}. | horas Registradas: ${horasRegistradas}h.`;
    }
    else {
        return `Materia: ${materia}. | Dificultad: ${nivelDificultad}. | Sin registros de horas aún.`;
    }
    ;
}
;
console.log(gestionarProgresoEstudio('Programacion I', 3, 'Basico'));
console.log(gestionarProgresoEstudio('Programacion I', undefined, 'Basico'));
// funcion que analiza redimiento semanal.
function analizarRendimientoSemanal(nombreEstudiante, horasPorSemana, metaCumplida = true) {
    const totalHorasSemanal = horasPorSemana[0] + horasPorSemana[1] + horasPorSemana[2] + horasPorSemana[3] + horasPorSemana[4];
    if (metaCumplida) {
        return `Su redimiento estimado ${nombreEstudiante} es de ${totalHorasSemanal} horas de Lunes a Viernes. meta cumplida ${metaCumplida}`;
    }
    else {
        return `Su redimiento estimado ${nombreEstudiante} es de ${totalHorasSemanal} horas de Lunes a Viernes. meta cumplida ${metaCumplida}`;
    }
    ;
}
;
console.log(analizarRendimientoSemanal('Osfran', [2, 2, 2, 2, 0]));
console.log(analizarRendimientoSemanal('Osfran', [2, 2, 2, 3, 0], false));
// funcion de analisis de acceso a una tienda falsa
function procesarAccesoTienda(nombreCliente, comprasPasadas, esMiembroVIP = false) {
    if (comprasPasadas) {
        return `Estimado ${nombreCliente} su historial de compras es: ${comprasPasadas[0] + comprasPasadas[1] + comprasPasadas[2]} Usted es miembro VIP: ${esMiembroVIP ? true : false}`;
    }
    else {
        return `Estimado ${nombreCliente} su historial de compras es: ${'No tiene historial'} Usted es miembro VIP: ${esMiembroVIP ? true : false}`;
    }
}
console.log(procesarAccesoTienda('Fermin', [20, 20, 60]));
console.log(procesarAccesoTienda('Fermin', [25, 25, 60], true));
//# sourceMappingURL=dia4-semana1.js.map