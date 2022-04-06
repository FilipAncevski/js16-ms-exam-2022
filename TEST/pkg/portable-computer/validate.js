const { Validator } = require("node-input-validator");

const computerCreate = {
  brand: "require|string",
  model: "require|string",
  cpu_cores: "require|integer",
  ram: "require|integer",
  disk: "require|string",
  price: "require|integer",
  stores: "require|array",
  num_ports: "require|object",
  create: "require|date",
};

const computerUpdate = {
  brand: "string",
  model: "string",
  cpu_cores: "integer|between:1,16",
  ram: "integer",
  disk: "string",
  price: "integer",
  stores: "array",
  num_ports: "object",
  create: "date",
};

const validate = async (data, schema) => {
  const v = new Validator(data, schema);
  const c = await v.check();
  if (!c) {
    throw {
      error: 400,
      code: "Missing required fields",
    };
  }
};

module.exports = {
  validate,
  computerCreate,
  computerUpdate,
};
