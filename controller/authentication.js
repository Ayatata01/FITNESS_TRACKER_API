const User = require("../models/user");
const Authentication = require("../helper/authentication");
const bcrypt = require("bcrypt");

exports.Login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = {
    email: email,
  };

  const token = Authentication.CreateToken(user);

  User.findOne({ email: email }).then((user) => {
    if (user) {
      if (bcrypt.compare(password, user.password)) {
        res.status(200).json({
          token,
        });
      } else {
        res.json({
          message: "Password mismatch",
        });
      }
    } else {
      res.json({
        message: "User not found",
      });
    }
  });
};

exports.Register = async (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const hashedPassword = await bcrypt.hash(password, 10);

  SaveData = new User({
    username: username,
    email: email,
    password: hashedPassword,
  });

  User.find({ email: email })
    .then((data) => {
      if (data.length > 0) {
        res.status(400).json({
          message: `${email} is already in use`,
        });
      } else {
        SaveData.save().then((data) => {
          res.status(201).json({
            message: "data is saved successfully",
            data: {
              username,
              email,
            },
          });
        });
      }
    })
    .catch((err) => res.status(401).json({ err }));
};
