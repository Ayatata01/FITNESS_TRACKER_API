const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Progress = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    id_aktifitas: {
      type: String,
      required: true,
    },
    jumlah_yang_telah_dicapai: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Progress", Progress);
