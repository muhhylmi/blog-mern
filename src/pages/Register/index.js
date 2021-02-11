import React from "react";
import { RegisterBg } from "../../assets";
import { Button, Input, Link } from "../../component";
import "./index.scss";

const Register = () => {
  return (
    <div className="contain">
      <div className="left">
        <img src={RegisterBg} alt="imageBG" className="img-Bg"></img>
      </div>
      <div className="right">
        <p>Register</p>
        <Input label="Full Name" placeholder="Masukan Full Name" />
        <Input label="Email" placeholder="Masukan Email" />
        <Input label="Password" placeholder="Masukan Password" />
        <Button label="Masuk Halaman Login" />
        <Link />
      </div>
    </div>
  );
};

export default Register;
