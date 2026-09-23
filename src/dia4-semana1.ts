// funcion que evalua texto occional la cual es (hora?) su funcion es que se
// debe reguistrar siempre la materia pero horas de estudio puede ser occional.
function crearPerfilEstudio(materia: string ,horas?: number): string {
    if (horas) {
        return `Estudiando ${materia} por ${horas} horas hoy.`;
    } else {
        return `Estudiando ${materia} hoy`;
    };
};

console.log(crearPerfilEstudio('Matematicas'));
console.log(crearPerfilEstudio('Logica Computacional', 3));

// función que gestiona progreso en estudio con datos por defecto e occionales.
function gestionarProgresoEstudio(materia: string, horasRegistradas?: number, nivelDificultad: string = 'Intermedio'): string {
    if (horasRegistradas) {
        return `Materia: ${materia}. | Dificultad: ${nivelDificultad}. | horas Registradas: ${horasRegistradas}h.`;
    } else {
        return `Materia: ${materia}. | Dificultad: ${nivelDificultad}. | Sin registros de horas aún.`;
    };
};

console.log(gestionarProgresoEstudio('Programacion I', 3, 'Basico'));
console.log(gestionarProgresoEstudio('Programacion I', undefined, 'Basico'));

// funcion que analiza redimiento semanal.
function analizarRendimientoSemanal(nombreEstudiante: string, horasPorSemana: number[], metaCumplida: boolean = true): string {
    const totalHorasSemanal: number = horasPorSemana[0] + horasPorSemana[1] + horasPorSemana[2] + horasPorSemana[3] + horasPorSemana[4];
    if (metaCumplida) {
        return `Su redimiento estimado ${nombreEstudiante} es de ${totalHorasSemanal} horas de Lunes a Viernes. meta cumplida ${metaCumplida}`;
    } else {
        return `Su redimiento estimado ${nombreEstudiante} es de ${totalHorasSemanal} horas de Lunes a Viernes. meta cumplida ${metaCumplida}`;
    };
};

console.log(analizarRendimientoSemanal('Osfran', [2,2,2,2,0]));
console.log(analizarRendimientoSemanal('Osfran', [2,2,2,3,0], false));

// funcion de analisis de acceso a una tienda falsa
function procesarAccesoTienda(nombreCliente: string, comprasPasadas?: number[], esMiembroVIP: boolean = false) {
    if (comprasPasadas) {
        return `Estimado ${nombreCliente} su historial de compras es: ${comprasPasadas[0] + comprasPasadas[1] + comprasPasadas[2]} Usted es miembro VIP: ${esMiembroVIP ? true : false}`
    } else {
        return `Estimado ${nombreCliente} su historial de compras es: ${'No tiene historial'} Usted es miembro VIP: ${esMiembroVIP ? true : false}`
    }
}

console.log(procesarAccesoTienda('Fermin', [20,20,60]));
console.log(procesarAccesoTienda('Fermin', [25,25,60], true));