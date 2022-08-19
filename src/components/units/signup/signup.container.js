import SignupUI from "./signup.presenter";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
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
      url: "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/auth/signup",
      headers: { "Content-Type": "application/json" },
      data: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        alert("회원가입이 완료되었습니다.");
        navigate("/");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  return (
    <SignupUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickSubmit={onClickSubmit}
      active={active}
    />
  );
}
