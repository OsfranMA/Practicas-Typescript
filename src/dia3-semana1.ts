let calificaciones: number[] = [80,80,80,81];

// funcion que calcula el promedio de estudiantes mediante una lista de numeros number[].
function calcularPromedio(notas: number[]) : number {
    return (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
};

console.log(calcularPromedio(calificaciones));

let tareasPendientes: string[] = ['realizar string', 'realizar boolean', 'realizar numbers'];

// funcion que devuelve el numero de tareas pendientes mediantes textos strings (string[]) de una lista.
function contarTareas(tarea: string[]): number {
    return tarea.length;
};

console.log(contarTareas(tareasPendientes));