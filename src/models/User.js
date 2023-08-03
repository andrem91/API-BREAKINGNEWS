import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
    require: true,
  },
  background: {
    type: String,
    require: true,
  },
});

const User = model("User", UserSchema);

export default User;
