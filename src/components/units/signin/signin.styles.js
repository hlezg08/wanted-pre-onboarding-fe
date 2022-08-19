import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InnerWrapper = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 60px 45px;
  border-radius: 20px;
  background-color: white;
`;
export const Title = styled.h1`
  font-size: 2rem;
`;
export const InputWrapper = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin: 5px 0;
  padding: 10px;
  font-size: 1rem;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  height: 50px;
  margin: 10px 0;
`;
export const SubmitButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  font-size: 1.125rem;
  background-color: black;
  color: white;
  cursor: pointer;
  :disabled {
    background-color: gray;
  }
`;
