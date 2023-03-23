const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Aktifitas = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    jenis_aktifitas: {
      type: String,
      required: true,
    },
    durasi: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Aktifitas", Aktifitas);
