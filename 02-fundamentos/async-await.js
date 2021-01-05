/* let getNombre = async() => {
  return 'Javier'; // con el async el return es una promesa
};
 */
/* es lo mismo que tener
  let getNombre = () => {
    return new Promise((resolve, reject) => {
      resolve('Javier');
    });
  } 
*/
let getNombre = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Javier');
    }, 3000);   
  });
} 

let saludo = async() => {
  let nombre = await getNombre();
  return `Hola ${nombre}`;
}

saludo().then(mensaje => {
  console.log(mensaje);
}).catch(err => console.log(err));