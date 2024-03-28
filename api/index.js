const express = require("express");

const config = require("../config");
const user = require("./components/user/network");
const auth = require("./components/auth/network");

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router
app.use("/api/user", user);
app.use("/api/auth", auth);

//iniciador del servicio
const port = config.api.port;
app.listen(port, () => {
  console.log("servicio de api corriendo en el puerto: ", port);
});
