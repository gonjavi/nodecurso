let empleados = [{
  id: 1,
  nombre: 'Zora'
},{
  id: 2,
  nombre: 'Carolina'
},{
  id: 3,
  nombre: 'Juan'
}];

let salarios = [{
  id: 1,
  salario: 1000,
},{
  id: 2,
  salario: 2000 
}];

let getEmpleado = (id, callback) => {
  const empleadoDB = empleados.find(empleado => empleado.id === id);
  
  if (!empleadoDB) {
    callback(`No existe un empleado con el ID ${id}`);
  } else {
    callback(null, empleadoDB);
  }
}

getEmpleado(11, (err, empleado) => {
  if (err) {
    return console.log(err);
  }
  console.log(empleado)
})