"use strict";
;
const perfil = {
    nombre: 'Osfran',
    metaAños: 2027,
    horasEstudioDiarias: 1,
    disponibleRemoto: true,
};
console.log(perfil);
;
const ModuloActual = {
    titulo: 'Practicas Interface',
    semana: 2,
    completado: false,
    descriccion: ['Dominar interface desde la forma de inyectar datos'],
};
const ModeloAnterior = {
    titulo: 'Practicas de Funciones',
    semana: 1,
    completado: true,
    descriccion: ['Dominar las funciones mediante practicas de varios tipos de ejercicios'],
};
console.log(ModuloActual);
console.log(ModeloAnterior);
;
let tarea1 = {
    id: [7832784533],
    titulo: 'Limites',
    completado: false,
    observacion: ['Estoy en proceso y con tiempo de realizar esta tarea'],
};
let tarea2 = {
    id: [7832784533],
    titulo: 'Tipado Basico',
    completado: true,
};
tarea1.titulo = 'Derivadas';
// tarea2.id = [9090322319] ERROR no se puede modificar por readonly.
console.log(tarea1);
console.log(tarea2);
//# sourceMappingURL=dia1-semana2.js.map