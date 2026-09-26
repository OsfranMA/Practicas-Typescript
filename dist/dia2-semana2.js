"use strict";
let usuarioActual = 'Administrador';
console.log(usuarioActual);
let cursoTypescript = {
    titulo: 'Typescript',
    duracionHoras: 1,
    esGratis: true,
    etiquetas: ['Type alias y interface, etc'],
};
console.log(cursoTypescript);
;
let usuarioAntiguo = {
    id: 21233499,
    nombre: 'Pedro Gonzales',
    suscripción: 'Pro',
};
console.log(usuarioAntiguo);
function verificarAccesoPlataforma(Usuario) {
    if (Usuario.suscripción === 'Pro' || Usuario.suscripción === 'Enterprise') {
        return true;
    }
    else {
        return false;
    }
    ;
}
;
console.log(verificarAccesoPlataforma(usuarioAntiguo));
;
const inventario = [
    {
        id: 238494,
        nombre: 'Phone 12 pro',
        precio: 10000.50,
        categoria: 'Tecnologia',
        descuento: 899.66,
    },
    {
        id: 484980,
        nombre: 'Alfombra',
        precio: 233.99,
        categoria: 'Hogar',
    },
];
function calcularPrecioFinal(precio) {
    if (precio.descuento) {
        return precio.precio - precio.descuento;
    }
    else {
        return precio.precio;
    }
}
console.log(calcularPrecioFinal(inventario[0]));
console.log(calcularPrecioFinal(inventario[1]));
//# sourceMappingURL=dia2-semana2.js.map