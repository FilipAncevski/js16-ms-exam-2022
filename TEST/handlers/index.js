const {
  listComputers,
  create,
  listOnePc,
  updatePc,
  remove,
} = require("../pkg/portable-computer");

const listAll = async (req, res) => {
  try {
    return res.status(200).send(await listComputers());
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};
const add = async (req, res) => {
  try {
    const pc = await create(req.body);
    return res.status(201).send(pc);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};
const listOne = async (req, res) => {
  try {
    const pc = await listOnePc(req.body.params);
    console.log(pc);
    return res.status(200).send(pc);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};
const update = async (req, res) => {
  try {
    const up = await updatePc(req.body.params, red.body);
    return res.status(204).send(" ");
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};
const updatePartial = async (req, res) => {
  try {
    const up = await updatePc(req.body.params, red.body);
    return res.status(204).send(" ");
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};
const deleteUser = async (req, res) => {
  try {
    await remove(req.body.params);
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
