const { Validator } = require("node-input-validator");

const computerCreate = {
  brand: "required|string",
  model: "required|string",
  cpu_cores: "required|between:1,16",
  ram: "required|integer",
  disk: "required|string",
  price: "required|integer",
  stores: "required|array",
  num_ports: "required|object",
  create: "required|date",
};

const computerUpdate = {
  brand: "string",
  model: "string",
  cpu_cores: "integer",
  ram: "integer",
  disk: "string",
  price: "integer",
  stores: "array",
  num_ports: "object",
  create: "date",
};

const validate = async (data, schema) => {
  const v = new Validator(data, schema);
  // let cpu = new Validator({ cpu_cores: "" }, { age: "required|between:1,16" });
  const c = await v.check();
  if (!c) {
    throw {
      code: 400,
      message: "Missing required fields",
    };
  }
};

module.exports = {
  validate,
  computerCreate,
  computerUpdate,
};
