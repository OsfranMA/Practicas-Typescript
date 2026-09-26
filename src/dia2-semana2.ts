type RolSistema = 'Administrador' | 'Editor' | 'Invitado';

let usuarioActual: RolSistema = 'Administrador';

console.log(usuarioActual);

type CursoOnline = {
    titulo: string;
    duracionHoras: number;
    esGratis: boolean;
    etiquetas: string[];
};

let cursoTypescript: CursoOnline = {
    titulo: 'Typescript',
    duracionHoras: 1,
    esGratis: true,
    etiquetas: ['Type alias y interface, etc'],
};

console.log(cursoTypescript);

// reto que consiste en asignarle datos a type y crear una interface con plano para pasarle datos de usuario y 
// verificar si es Pro o Enterprise = true y si es Free entoces False.
type NivelSuscripción = "Free" | "Pro" | "Enterprise";

interface UsuarioPlataforma {
    id: number;
    nombre: string,
    suscripción: NivelSuscripción
};

let usuarioAntiguo: UsuarioPlataforma = {
    id: 21233499,
    nombre: 'Pedro Gonzales',
    suscripción: 'Pro',
};

console.log(usuarioAntiguo);

function verificarAccesoPlataforma(Usuario: UsuarioPlataforma): boolean {
    if (Usuario.suscripción === 'Pro' || Usuario.suscripción === 'Enterprise') {
         return true;
    } else {
        return false;
    };
};

console.log(verificarAccesoPlataforma(usuarioAntiguo));

// Otro practica de un ejercicio paracedo sobre el invetario de una tienda.
type CategoriaProducto = 'Tecnologia' | 'Ropa' | 'Hogar';

interface ProductoTienda {
    readonly id: number;
    nombre: string;
    precio: number;
    categoria: CategoriaProducto;
    descuento?: number;
};

const inventario: ProductoTienda[] = [
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
]

function calcularPrecioFinal(precio: ProductoTienda): number {
    if (precio.descuento) {
        return precio.precio - precio.descuento;
    } else {
        return precio.precio
    }
}

console.log(calcularPrecioFinal(inventario[0]));
console.log(calcularPrecioFinal(inventario[1]));