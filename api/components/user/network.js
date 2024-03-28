const express = require("express");
const response = require("../../../network/response");
const Controller = require("./index");

const router = express.Router();

// Ruta para obtener todos los elementos
router.get("/", async function (req, res) {
  try {
    const lista = await Controller.list(); // Llama al método 'list' del controlador
    response.success(req, res, lista, 200); // Responde con la lista obtenida
  } catch (error) {
    response.error(req, res, error.message, 500); // Responde con un error en caso de fallo
  }
});

// Ruta para obtener un elemento por su ID
router.get("/:id", async function (req, res) {
  try {
    const user = await Controller.get(req.params.id); // Llama al método 'get' del controlador con el ID proporcionado en la URL
    response.success(req, res, user, 200); // Responde con el usuario obtenido
  } catch (error) {
    response.error(req, res, error.message, 500); // Responde con un error en caso de fallo
  }
});

// Ruta para insertar o actualizar un elemento
router.post("/", async function (req, res) {
  try {
    const user = await Controller.upsert(req.body); // Llama al método 'upsert' del controlador con los datos proporcionados en el cuerpo de la solicitud
    response.success(req, res, user, 202); // Responde con el usuario actualizado o insertado
  } catch (error) {
    response.error(req, res, error.message, 500); // Responde con un error en caso de fallo
  }
});

// Ruta para eliminar un elemento por su ID
router.delete("/:id", async function (req, res) {
  try {
    const user = await Controller.remove(req.params.id); // Llama al método 'remove' del controlador con el ID proporcionado en la URL
    response.success(req, res, user, 202); // Responde con el usuario eliminado
  } catch (error) {
    response.error(req, res, error.message, 500); // Responde con un error en caso de fallo
  }
});

module.exports = router;
