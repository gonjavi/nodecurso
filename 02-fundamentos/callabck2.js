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

// salario

let getSalario = (empleado, callback) => {
  const salarioDB = salarios.find(salario => salario.id === empleado.id);

  if (!salarioDB) {
    callback(`No se encontró un salario para el usuario ${empleado.nombre}`);
  } else {
    callback(null, {
      nombre: empleado.nombre,
      salario: salarioDB.salario,
      id: empleado.id
    });
  }
}

getEmpleado(2, (err, empleado) => {
  if (err) {
    return console.log(err);
  }
  getSalario(empleado, (err, respuesta) => {
    if (err) {
      return console.log(err);
    }
    console.log(respuesta);
  })
});