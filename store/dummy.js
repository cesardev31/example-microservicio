// Definición de la base de datos
const db = {
  user: [
    { id: "1", name: "cesar", username: "safases", password: "dragones123" },
  ], // Un objeto 'user' con un arreglo de usuarios
};

// Función asincrónica para obtener todos los elementos de una tabla
async function list(tabla) {
  return db[tabla] || []; // Devuelve el arreglo correspondiente a la tabla
}

// Función asincrónica para obtener un elemento específico por su ID de una tabla
async function get(tabla, id) {
  let col = await list(tabla); // Obtiene todos los elementos de la tabla
  return col.filter((item) => item.id === id)[0] || null; // Devuelve el elemento encontrado o null si no se encuentra
}

// Función asincrónica para insertar o actualizar un elemento en una tabla
async function upsert(tabla, data) {
  if (!db[tabla]) {
    db[tabla] = [];
  }
  await db[tabla].push(data); // Agrega el nuevo elemento al arreglo correspondiente a la tabla
}

// Función asincrónica para eliminar un elemento de una tabla por su ID
async function remove(tabla, id) {
  let col = await list(tabla); // Obtiene todos los elementos de la tabla
  const index = col.findIndex((item) => item.id === id); // Busca el índice del elemento con el ID proporcionado
  if (index !== -1) {
    // Si se encuentra el elemento
    col.splice(index, 1); // Elimina el elemento del arreglo
    return true; // Indica que se ha eliminado correctamente
  } else {
    return false; // Indica que el elemento no se encontró
  }
}

async function query(tabla, q) {
  let col = await list(tabla);
  let keys = Object.keys(q);
  let key = keys[0];
  const result = col.filter((item) => item[key] === q[key])[0] || null;
  return result;
}

// Exporta las funciones para ser utilizadas fuera de este módulo
module.exports = {
  list,
  get,
  upsert,
  remove,
  query,
};
