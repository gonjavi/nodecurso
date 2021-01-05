let empleados = [{
  id: 1,
  nombre: 'zoraima'
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

let getEmpleado = id => {
  return new Promise((resolve, reject) => {
    const empleadoDB = empleados.find(empleado => empleado.id === id);  
    if (!empleadoDB) {
      reject(`No existe un empleado con el ID ${id}`);
    } else {
      resolve(empleadoDB);
    }
  });
}


let getSalario = empleado => {
  return new Promise((resolve, reject) => {
    const salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
      reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
    } else {
      resolve({
        nombre: empleado.nombre,
        salario: salarioDB.salario,
        id: empleado.id
      });
    }
  });  
}

getEmpleado(3).then(empleado => {  
  return getSalario(empleado); // con el return el siguiente then corresponde a esa promesa  
}).then(resp => {
  console.log(`El salario de ${resp.nombre} es: ${resp.salario} `);
}).catch(err => console.log(err));


