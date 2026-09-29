"use strict";
;
;
let usuario1 = {
    id: 1254,
    nombre: 'Osfran',
    correo: 'usuario0392@gmail.com',
    roll: 'Frond-end',
    tecnologias: 'HTML5, CSS3, JS, TS, REACT',
    ubicacionObjetivo: 'España',
    activo: true,
};
function actualizarDatosUsuario(usuario, actualizar) {
    return { ...usuario, ...actualizar };
}
;
let actualizarDtsUsuario1 = actualizarDatosUsuario(usuario1, {
    roll: 'Backend',
    ubicacionObjetivo: 'Alemania',
});
console.log(usuario1);
console.log(actualizarDtsUsuario1);
;
;
let candidato1 = {
    id: 2302,
    nombreCompleto: 'Borja Marco Paredes Molina',
    eimal: 'borjadelcasillero@gimal.com',
    experienciaAños: 1.5,
    nivel: 'Mid',
    tecnologias: ['HTML5', 'CSS3', 'PYTON', 'JS', 'TS', 'ANGULAR'],
    dispuestoEmigrar: true,
};
function inscribirCandidato(cargarDatos) {
    return { id: Math.floor(Math.random() * 1000), ...cargarDatos, };
}
;
function actualizarDtsCandidato(candidato, datos) {
    return { ...candidato, ...datos };
}
;
const { id, ...sinId } = candidato1;
let candidatoInscrito = inscribirCandidato(sinId);
console.log(candidatoInscrito);
let actualizarDtsCandidato1 = actualizarDtsCandidato(candidato1, {
    tecnologias: ['HTML5', 'CSS3', 'JS', 'TS', 'ANGULAR'],
    dispuestoEmigrar: false,
});
console.log(actualizarDtsCandidato1);
//# sourceMappingURL=dia5-semana2.js.map