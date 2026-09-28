"use strict";
;
let laptop = {
    id: 2397,
    nombre: 'Lapto HP 13 pro',
    precio: 14999,
    stock: 50,
};
function actualizarDatos(produc, actualizarDts) {
    return { ...produc, ...actualizarDts };
}
;
let actualizarDtsLaptop = actualizarDatos(laptop, {
    precio: 15999,
    stock: 25,
});
console.log(actualizarDtsLaptop);
console.log(laptop);
;
let usuarioReguistrado1 = {
    id: 1212,
    nombreCompleto: 'Osfran Jared Murillo Avila',
    eimal: 'botsito051981@gmail.com',
    pais: 'Honduras',
    activo: true,
};
function actualizarDtsUsuario(usuario, actualizar) {
    return { ...usuario, ...actualizar };
}
;
let actualizarUsuario1 = actualizarDtsUsuario(usuarioReguistrado1, {
    pais: 'España',
});
console.log(usuarioReguistrado1);
console.log(actualizarUsuario1);
//# sourceMappingURL=dia4-semana2.js.map