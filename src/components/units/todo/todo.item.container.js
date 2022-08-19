import axios from "axios";
import { useState } from "react";
import * as S from "./todo.styles";

export default function TodoItem(props) {
  const [newContents, setNewContents] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const onChangeNewContents = (event) => {
    setNewContents(event.target.value);
  };

  const onClickEditMode = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickDeleteTodo = (id) => async () => {
    await axios({
      method: "delete",
      url: `https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos/${id}`,
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
      },
    })
      .then((response) => {
        alert("삭제되었습니다.");
        window.location.reload("/todo");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const onClickUpdateTodo = (id) => async () => {
    await axios({
      method: "put",
      url: `https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos/${id}`,
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
        "Content-Type": "application/json",
      },
      data: {
        todo: newContents || props.el.todo,
        isCompleted: props.el.isCompleted,
      },
    })
      .then((response) => {
        window.location.reload("/todo");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const onCheckCompleted = async (checked, id) => {
    await axios({
      method: "put",
      url: `https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos/${id}`,
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
        "Content-Type": "application/json",
      },
      data: {
        todo: props.el.todo,
        isCompleted: checked,
      },
    })
      .then((response) => {
        window.location.reload("/todo");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <S.ListItemWrapper>
      {!isEdit && (
        <>
          <S.ListCompleted
            type="checkbox"
            onChange={(e) => onCheckCompleted(e.target.checked, props.el.id)}
            checked={props.el.isCompleted}
          />
          <S.ListItem isCompleted={props.el.isCompleted}>
            {props.el.todo}
          </S.ListItem>
          <S.EditIcon onClick={onClickEditMode} />
          <S.DeleteIcon onClick={onClickDeleteTodo(props.el.id)} />
        </>
      )}
      {isEdit && (
        <>
          <S.EditInput
            type="text"
            onChange={onChangeNewContents}
            defaultValue={props.el.todo}
          />
          <S.EditModeButton onClick={onClickUpdateTodo(props.el.id)}>
            제출
          </S.EditModeButton>
          <S.EditModeButton onClick={onClickEditMode}>취소</S.EditModeButton>
        </>
      )}
    </S.ListItemWrapper>
  );
}
