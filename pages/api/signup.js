import User from "../models/User";
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    let success = false;
    if (req.method == "POST") {
      let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
          req.body.password,
          "tahoor123"
        ).toString(),
      });

      let userData = await user.save();

      let data = {
        user: {
          id: user._id,
        },
      };
      let token = jwt.sign(data, process.env.JWT_SECURITY);
      success = true;
      res.status(200).json({ success: success, token: token });
    } else {
      res.status(404).json({ success: false });
    }
  } catch (err) {
    console.log(err);
  }
};

export default connectDb(signup);
