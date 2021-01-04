let pool = {
  nombre: 'Olga',
  apellido: 'Andrade',
  instrumento: 'voz',
  getNombre: function() {
    return `${this.nombre} ${this.apellido} - instrumento ${this.instrumento}`
  }
};
console.log(pool.getNombre());