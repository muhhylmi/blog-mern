import React from "react";
import { useHistory } from "react-router-dom";
import { LoginBg } from "../../assets";
import { Button, Input, Link } from "../../component";

const Login = () => {
  const history = useHistory();
  return (
    <div className="contain">
      <div className="left">
        <img src={LoginBg} alt="imageBG" className="img-Bg"></img>
      </div>
      <div className="right">
        <p>Login</p>
        <Input label="Email" placeholder="Masukan Email" />
        <Input label="Password" placeholder="Masukan Password" />
        <Button label="Login" onClick={() => history.push("/")} />
        <Link
          label="Belum punya akun? Daftar dulu"
          onClick={() => history.push("/register")}
        />
      </div>
    </div>
  );
};

export default Login;
