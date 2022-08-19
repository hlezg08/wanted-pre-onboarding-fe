import TodoItem from "./todo.item.container";
import * as S from "./todo.styles";
export default function TodoUI(props) {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.CreateWrapper>
          <S.CreateInput
            type="text"
            placeholder="할 일을 입력하세요."
            onChange={props.onChangeContents}
          />
          <S.AddIcon onClick={props.onClickCreateTodo} />
        </S.CreateWrapper>
        <S.ListWrapper>
          {props.todo.map((el, index) => (
            <TodoItem
              key={el.id}
              el={el}
              index={index}
              accessToken={props.accessToken}
            />
          ))}
        </S.ListWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
