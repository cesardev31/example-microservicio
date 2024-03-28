require("dotenv").config();

module.exports = {
  api: {
    port: process.env.PORT_API || 3000,
  },
};
