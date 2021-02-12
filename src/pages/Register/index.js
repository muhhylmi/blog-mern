import React from "react";
import { useHistory } from "react-router-dom";
import { RegisterBg } from "../../assets";
import { Button, Input, Link } from "../../component";
import "./index.scss";

const Register = () => {
  const history = useHistory();
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
        <Button label="Register" onClick={() => history.push("/login")} />
        <Link
          label="Sudah Punya Akun masuk halaman login"
          onClick={() => history.push("/login")}
        />
      </div>
    </div>
  );
};

export default Register;
