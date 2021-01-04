let pool = {
  nombre: 'Olga',
  apellido: 'Andrade',
  instrumento: 'voz',
  getNombre: function() {
    return `${this.nombre} ${this.apellido} - instrumento ${this.instrumento}`
  }
};

const { nombre, apellido, instrumento } = pool;

console.log(nombre, apellido, instrumento);

const { nombre: primerNombre } = pool;

console.log(primerNombre);