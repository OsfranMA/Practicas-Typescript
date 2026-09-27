// utilizando estends para ahorrar repetir codigo
interface Trabajador {
    id: number;
    nombre: string;
};

interface ProgramadorRemoto extends Trabajador {
    lenguajePrincipal: string;
    horasSemanales: number;
};

const trabajadorProgram: ProgramadorRemoto = {
    id: 1212,
    nombre: 'Osfran',
    lenguajePrincipal: 'Typescript',
    horasSemanales: 35,
};

const trabajadorNova: Trabajador = {
    id: 2203,
    nombre: 'Alexander',
};

console.log(trabajadorProgram);
console.log(trabajadorNova);

// Panel de control de desarrolladores donde se evaluan los activos true para dejarlos pasar.
interface Desarrollador {
    nombre: string,
    experienciaAños: number,
    activo: boolean,
};

const listaDesarrolladores: Desarrollador[] = [
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

function filtraActivos(activos: Desarrollador[]) {
    const desarrolladorActiv = activos.filter(activos => {
        return activos.activo;
    });
    return desarrolladorActiv;
};

console.log(filtraActivos(listaDesarrolladores));

// Funcion que cambia el estado de completado: false a completado: true.
interface Curso {
    titulo: string,
    duracionHoras: number,
    completado: boolean,
};

const cursoTS: Curso = {
    titulo: 'Typescript',
    duracionHoras: 35,
    completado: false,
};

function completarCurso(curso: Curso): string {
    curso.completado = true;
    return `Felicidades has completado el curso de ${curso.titulo}.  Estado Curso = ${curso.completado}`;
};

console.log(completarCurso(cursoTS));
