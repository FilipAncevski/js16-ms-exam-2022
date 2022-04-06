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
    // num_ports: mongoose.Types.Subdocument,
    create: Date,
  },
  "computers"
);

module.exports = Computer;
