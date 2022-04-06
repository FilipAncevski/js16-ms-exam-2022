const mongoose = require("mongoose");

const Computer = mongoose.model(
  "Computer",
  {
    brand: String,
    model: String,
    cpu_cores: Number,
    ram: Number,
    disk: String,
    price: Number,
    stores: [String],
    num_ports: Object,
    create: Date,
  },
  "computers"
);

const listComputers = async () => {
  try {
    return await Computer.find({});
  } catch (error) {
    throw error;
  }
};

const create = async (info) => {
  try {
    const nc = await Computer.create(info);
    return await nc.save();
  } catch (error) {
    throw error;
  }
};

const listOnePc = async (id) => {
  try {
    return await Computer.find({ _id: id });
  } catch (error) {
    throw error;
  }
};

const updatePc = async (id, info) => {
  try {
    return await Computer.findByIdAndUpdate({ _id: id }, info);
  } catch (error) {
    throw error;
  }
};

const remove = async (id) => {
  try {
    return await Computer.findByIdAndDelete({ _id: id });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  listComputers,
  create,
  listOnePc,
  updatePc,
  remove,
};
