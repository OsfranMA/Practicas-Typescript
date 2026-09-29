//funcionando lo aprendido type, extends y partial en un ejercio
type Roll = 'Frond-end' | 'Backend';

interface Persona {
    readonly id: number;
    nombre: string;
    correo: string;
};

interface DesarrolladorRemoto extends Persona {
    roll: Roll;
    tecnologias: string;
    ubicacionObjetivo: string;
    activo: boolean;
};

let usuario1: DesarrolladorRemoto = {
    id: 1254,
    nombre: 'Osfran',
    correo: 'usuario0392@gmail.com',
    roll: 'Frond-end',
    tecnologias: 'HTML5, CSS3, JS, TS, REACT',
    ubicacionObjetivo: 'España',
    activo: true,
};

function actualizarDatosUsuario(usuario: DesarrolladorRemoto, actualizar: Partial<DesarrolladorRemoto>): DesarrolladorRemoto {
    return {...usuario, ...actualizar};
};

let actualizarDtsUsuario1 = actualizarDatosUsuario(usuario1, {
    roll: 'Backend',
    ubicacionObjetivo: 'Alemania',
});

console.log(usuario1);
console.log(actualizarDtsUsuario1);

//Creacion de sistema interno para desarrolladores que quieren ser integrados a España,
type NivelExperiencia = 'Junior' | 'Mid' | 'Senior';

interface CandidatoBase {
    readonly id: number;
    nombreCompleto: string;
    eimal: string;
    experienciaAños: number;
};

interface CandidatoRemoto extends CandidatoBase {
    nivel: NivelExperiencia;
    tecnologias: string[];
    dispuestoEmigrar: boolean;
};

let candidato1: CandidatoRemoto = {
    id: 2302,
    nombreCompleto: 'Borja Marco Paredes Molina',
    eimal: 'borjadelcasillero@gimal.com',
    experienciaAños: 1.5,
    nivel: 'Mid',
    tecnologias: ['HTML5', 'CSS3', 'PYTON', 'JS', 'TS', 'ANGULAR'],
    dispuestoEmigrar: true,
};

function inscribirCandidato(cargarDatos: Omit<CandidatoRemoto, 'id'>) {
    return {id: Math.floor(Math.random() * 1000), ...cargarDatos,};
};

function actualizarDtsCandidato(candidato: CandidatoRemoto, datos: Partial<CandidatoRemoto>): CandidatoRemoto {
    return {...candidato, ...datos};
};

const {id, ...sinId} = candidato1;
let candidatoInscrito = inscribirCandidato(sinId);

console.log(candidatoInscrito)

let actualizarDtsCandidato1 = actualizarDtsCandidato(candidato1, {
    tecnologias: ['HTML5', 'CSS3', 'JS', 'TS', 'ANGULAR'],
    dispuestoEmigrar: false,
});

console.log(actualizarDtsCandidato1);