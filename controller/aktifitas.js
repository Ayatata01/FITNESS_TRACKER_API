const Aktifitas = require("../models/activities");

exports.Get = (req, res, next) => {
  Aktifitas.find({ email: req.user.email })
    .then((data) => {
      if (data) {
        res.status(200).json({
          data,
        });
      } else {
        res.status(404).json({
          message: "data not found",
        });
      }
    })
    .catch((err) => res.json({ err }));
};

exports.Create = (req, res, next) => {
  const jenisAktifitas = req.body.jenis_aktifitas;
  const durasi = req.body.durasi;
  const target = req.body.target;

  const SaveData = new Aktifitas({
    email: req.user.email,
    jenis_aktifitas: jenisAktifitas,
    durasi: durasi,
    target: target,
  });

  SaveData.save()
    .then((data) => {
      res.status(201).json({
        data,
      });
    })
    .catch((err) => res.json({ err }));
};

exports.Edit = (req, res, next) => {
  const id = req.params.id;
  const email = req.user.email;

  const jenisAktifitas = req.body.jenis_aktifitas;
  const durasi = req.body.durasi;
  const target = req.body.target;

  Aktifitas.findByIdAndUpdate(
    { _id: id, email: email },
    { jenis_aktifitas: jenisAktifitas, durasi: durasi, target: target },
    {
      new: true,
    }
  )
    .then((data) => {
      res.status(201).json({
        data,
      });
    })
    .catch((err) => {
      console.log(err);
    })
    .catch((err) => res.json({ err }));
};

exports.Delete = (req, res, next) => {
  const id = req.params.id;
  const email = req.user.email;

  Aktifitas.findOne({ _id: id, email: email })
    .then((data) => {
      if (data) {
        Aktifitas.deleteOne({ _id: id, email: email })
          .then(() => {
            res.json({
              message: "data deleted",
            });
          })
          .catch((err) => res.json({ err }));
      } else {
        res.json({
          message: "data is not found",
        });
      }
    })
    .catch((err) => res.json({ err }));
};
