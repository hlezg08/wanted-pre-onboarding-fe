import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SigninUI from "./signin.presenter";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setActive(email.includes("@") && password.length >= 8);
  }, [email, password]);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onClickSubmit = async () => {
    await axios({
      method: "post",
      url: "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/auth/signin",
      headers: { "Content-Type": "application/json" },
      data: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access_token);
        alert("로그인이 완료되었습니다. 환영합니다!");
        navigate("/todo");
        window.location.replace("/todo");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <SigninUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickSubmit={onClickSubmit}
      active={active}
    />
  );
}
