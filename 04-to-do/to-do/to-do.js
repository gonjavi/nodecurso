
const fs = require('fs');

let listadoToDo = [];

const guardarDB = () => {
  let data = JSON.stringify(listadoToDo);
  return new Promise((resolve, reject) => {
    if (!data) {
      reject('NO hay datos para guardar');
      return;
    }

    fs.writeFile('db/data.json', data, (err) => {
      if (err) 
        throw new Error('No se pudo grabar', err);      
    });
  });
}

const cargarDB = () => {
  try {
    listadoToDo = require('../db/data.json');
  } catch (error) {
    listadoToDo = [];
  }
}
const crear = descripcion => {
  cargarDB();
  let toDo = {
    descripcion,
    completado: false
  };
  listadoToDo.push(toDo);
  guardarDB();  
  return toDo;
}

const getListado = () => {
  cargarDB();
  return listadoToDo;
}

module.exports = {
  crear,
  getListado,
}