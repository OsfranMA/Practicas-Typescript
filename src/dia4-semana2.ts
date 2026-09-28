// utilizando partial<> en una funcion para ahorrar repetir codigo.
interface ProducTienda {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
};

let laptop: ProducTienda = {
    id: 2397,
    nombre: 'Lapto HP 13 pro',
    precio: 14999,
    stock: 50,
};

function actualizarDatos(produc: ProducTienda, actualizarDts: Partial<ProducTienda>): ProducTienda {
    return {...produc, ...actualizarDts};
};

let actualizarDtsLaptop = actualizarDatos(laptop, {
    precio: 15999,
    stock: 25,
});

console.log(actualizarDtsLaptop);
console.log(laptop);

// Segunda practica similar a la anterior.
interface PerfilUsuario {
    id: number;
    nombreCompleto: string;
    eimal: string;
    pais: string;
    activo: boolean;
};

let usuarioReguistrado1: PerfilUsuario = {
    id: 1212,
    nombreCompleto: 'Osfran Jared Murillo Avila',
    eimal: 'botsito051981@gmail.com',
    pais: 'Honduras',
    activo: true,
};

function actualizarDtsUsuario(usuario: PerfilUsuario, actualizar: Partial<PerfilUsuario>): PerfilUsuario {
    return {...usuario, ...actualizar};
};

let actualizarUsuario1 = actualizarDtsUsuario(usuarioReguistrado1, {
    pais: 'España',
});

console.log(usuarioReguistrado1);
console.log(actualizarUsuario1);