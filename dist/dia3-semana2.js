"use strict";
;
;
const trabajadorProgram = {
    id: 1212,
    nombre: 'Osfran',
    lenguajePrincipal: 'Typescript',
    horasSemanales: 35,
};
const trabajadorNova = {
    id: 2203,
    nombre: 'Alexander',
};
console.log(trabajadorProgram);
console.log(trabajadorNova);
;
const listaDesarrolladores = [
    {
        nombre: 'Juan',
        experienciaAños: 2,
        activo: false,
    },
    {
        nombre: 'Osfran',
        experienciaAños: 0,
        activo: true,
    },
    {
        nombre: 'Elias',
        experienciaAños: 8.5,
        activo: true,
    },
];
function filtraActivos(activos) {
    const desarrolladorActiv = activos.filter(activos => {
        return activos.activo;
    });
    return desarrolladorActiv;
}
;
console.log(filtraActivos(listaDesarrolladores));
;
const cursoTS = {
    titulo: 'Typescript',
    duracionHoras: 35,
    completado: false,
};
function completarCurso(curso) {
    curso.completado = true;
    return `Felicidades has completado el curso de ${curso.titulo}.  Estado Curso = ${curso.completado}`;
}
;
console.log(completarCurso(cursoTS));
//# sourceMappingURL=dia3-semana2.js.map