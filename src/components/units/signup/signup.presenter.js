import * as S from "../signin/signin.styles";

export default function SignupUI(props) {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.Title>회원가입</S.Title>
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
            회원가입
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
