const Progress = require("../models/progress");

exports.Get = (req, res, next) => {
  Progress.find({ email: req.user.email })
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
  const jumlahYangTelahDicapai = req.body.jumlah_yang_telah_dicapai;
  const idAktifitas = req.body.id_aktifitas;

  const SaveData = new Progress({
    email: req.user.email,
    id_aktifitas: idAktifitas,
    jumlah_yang_telah_dicapai: jumlahYangTelahDicapai,
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

  const jumlahYangTelahDicapai = req.body.jumlah_yang_telah_dicapai;

  Progress.findByIdAndUpdate(
    { _id: id, email: email },
    {
      jumlah_yang_telah_dicapai: jumlahYangTelahDicapai,
    },
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

  Progress.findOne({ _id: id, email: email })
    .then((data) => {
      if (data) {
        Progress.deleteOne({ _id: id, email: email })
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
