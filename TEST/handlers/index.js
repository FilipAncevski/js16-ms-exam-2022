const {
  listComputers,
  create,
  listOnePc,
  updatePc,
  remove,
} = require("../pkg/portable-computer");
const {
  computerCreate,
  computerUpdate,
  validate,
} = require("../pkg/portable-computer/validate");
const jwt = require("jsonwebtoken");
const { get } = require("../pkg/config");

const listAll = async (req, res) => {
  try {
    return res.status(200).send(await listComputers());
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

const add = async (req, res) => {
  try {
    await validate(req.body, computerCreate);

    const pc = await create(req.body);
    return res.status(201).send(pc);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

const listOne = async (req, res) => {
  try {
    const pc = await listOnePc(req.params.id);

    // const payload = {
    //   brand: pc.brand,
    //   model: pc.model,
    //   id: pc._id,
    //   exp: new Date().getTime() / 1000 + 7 * 24 * 60 * 60,
    // };

    // const token = jwt.sign(payload, get("service").jwt_key);

    return res.status(200).send(pc);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};
const update = async (req, res) => {
  try {
    await validate(req.body, computerCreate);

    const up = await updatePc(req.params.id, req.body);
    return res.status(204).send(" ");
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

const updatePartial = async (req, res) => {
  try {
    await validate(req.body, computerUpdate);

    const up = await updatePc(req.params.id, req.body);
    return res.status(204).send(" ");
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

const deleteUser = async (req, res) => {
  try {
    await remove(req.params.id);
    return res.status(204).send(" ");
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  listAll,
  add,
  listOne,
  update,
  updatePartial,
  deleteUser,
};
