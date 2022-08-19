import TodoUI from "./todo.presenter";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [contents, setContents] = useState("");

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    setAccessToken(access_token);
    const getTodos = async () => {
      await axios({
        method: "get",
        url: "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos",
        headers: { Authorization: `Bearer ${access_token}` },
      })
        .then((response) => {
          setTodo(response.data);
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    };
    getTodos();
  }, []);

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickCreateTodo = async () => {
    await axios({
      method: "post",
      url: "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      data: {
        todo: contents,
      },
    })
      .then((response) => {
        alert("등록되었습니다.");
        window.location.reload("/todo");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <TodoUI
      todo={todo}
      onChangeContents={onChangeContents}
      onClickCreateTodo={onClickCreateTodo}
      accessToken={accessToken}
    />
  );
}
