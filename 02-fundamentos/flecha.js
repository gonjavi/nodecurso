function sumar(a,b) {
  return a + b;
}

console.log(sumar(10, 20));

const sumar1 = (a,b) => a + b;
console.log(sumar1(15, 20));

const saludar = () => 'hola mundo';
console.log(saludar());

const sayHello = nombre => `Hola ${nombre}`;
console.log(sayHello('Zora'));

let pool = {
  nombre: 'Olga',
  apellido: 'Andrade',
  instrumento: 'voz',
  getNombre() {
    return `${this.nombre} ${this.apellido} - instrumento ${this.instrumento}`
  }
};
console.log(pool.getNombre());