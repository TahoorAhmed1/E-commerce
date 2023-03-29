import User from "../models/User";
import connectDb from "../../middleware/mongoose";

var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");
const login = async (req, res) => {
  try {
    let success = false;
    if (req.method == "POST") {
      let { email, password } = req.body;
      let user = await User.findOne({ email });
      let bytes = CryptoJS.AES.decrypt(user.password, "tahoor123");
      let userPassword = bytes.toString(CryptoJS.enc.Utf8);
      if (user) {
        if (req.body.email == user.email && req.body.password == userPassword) {
          let data = {
            user: {
              id: user.id,
            },
          };
          let token = jwt.sign(data, process.env.JWT_SECURITY);
          success = true;
          res.status(200).json({
            success: success,
            user,
            token: token,
            message: "Login successfully",
          });
        } else {
          res
            .status(404)
            .json({ success: false, message: "Invalid Cradentials" });
        }
      } else {
        success = false;
        res.status(404).json({ success: success, message: "User Not found" });
      }
    } else {
      res.status(404).json({ success: false });
    }
  } catch (err) {
    console.log(err);
  }
};

export default connectDb(login);
