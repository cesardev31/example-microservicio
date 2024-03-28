const { nanoid } = require("nanoid");
const auth = require("../auth");
const TABLA = "user";

module.exports = function (injectedStore) {
  // Exporta una función que recibe una instancia de store como argumento
  let store = injectedStore; // Inicializa 'store' con la instancia proporcionada
  if (!store) {
    // Si no se proporcionó una instancia de store
    store = require("../../../store/dummy"); // Utiliza un store de ejemplo (dummy)
  }

  // Función para obtener la lista de usuarios
  function list() {
    return store.list(TABLA); // Usa el método 'list' del store para obtener la lista de usuarios
  }

  // Función para obtener un usuario por su ID
  function get(id) {
    return store.get(TABLA, id); // Usa el método 'get' del store para obtener un usuario por su ID
  }

  // Función para insertar o actualizar un usuario
  async function upsert(body) {
    const user = {
      // Crea un objeto 'user' con los datos proporcionados
      name: body.name,
      username: body.username,
      password: body.password,
      ...(body.id ? { id: body.id } : { id: nanoid() }), // Si se proporciona un ID, úsalo; de lo contrario, genera uno nuevo con nanoid
    };
    if (body.password || body.username) {
      await auth.upsert({
        id: user.id,
        username: user.username,
        password: user.password,
      });
    }
    return store.upsert(TABLA, user); // Usa el método 'upsert' del store para insertar o actualizar el usuario
  }

  // Función para eliminar un usuario por su ID
  function remove(id) {
    return store.remove(TABLA, id); // Usa el método 'remove' del store para eliminar un usuario por su ID
  }

  return {
    list,
    get,
    upsert,
    remove,
  };
};
