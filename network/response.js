// Función para enviar una respuesta de éxito
exports.success = function (req, res, message, status) {
  let statusCode = status || 200; // Establece el código de estado predeterminado como 200 (OK) si no se proporciona otro
  let statusMessage = message || ""; // Establece el mensaje de estado predeterminado como una cadena vacía si no se proporciona otro
  // Envía una respuesta con el código de estado y el mensaje proporcionados
  res.status(statusCode).send({
    error: false, // Indica que no hay error
    status: statusCode, // Código de estado de la respuesta
    body: statusMessage, // Mensaje de la respuesta
  });
};

// Función para enviar una respuesta de error
exports.error = function (req, res, message, status) {
  let statusCode = status || 500; // Establece el código de estado predeterminado como 500 (Internal Server Error) si no se proporciona otro
  let statusMessage = message || "Internal Server Error"; // Establece el mensaje de estado predeterminado como "Internal Server Error" si no se proporciona otro
  // Envía una respuesta con el código de estado y el mensaje proporcionados
  res.status(statusCode).send({
    error: true, // Indica que hay un error
    status: statusCode, // Código de estado de la respuesta
    body: statusMessage, // Mensaje de error
  });
};
