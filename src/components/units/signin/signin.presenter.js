import { useNavigate } from "react-router-dom";
import * as S from "./signin.styles";

export default function SigninUI(props) {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.Title>로그인</S.Title>
        <S.InputWrapper>
          <S.Label>이메일</S.Label>
          <S.Input
            type="text"
            placeholder="@를 포함한 이메일 주소를 입력해주세요."
            onChange={props.onChangeEmail}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Input
            type="password"
            placeholder="8자 이상 비밀번호를 입력해주세요."
            onChange={props.onChangePassword}
          />
        </S.InputWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton
            disabled={!props.active}
            onClick={props.onClickSubmit}
          >
            로그인
          </S.SubmitButton>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
