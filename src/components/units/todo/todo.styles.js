import styled from "@emotion/styled";
import { GrAdd } from "react-icons/gr";
import { MdEdit, MdDelete } from "react-icons/md";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InnerWrapper = styled.div`
  width: 500px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px;
  border-radius: 20px;
  background-color: white;
`;
export const CreateWrapper = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
export const CreateInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid black;
  font-size: 1.125rem;
`;
export const ListWrapper = styled.ul`
  width: 100%;
  flex-grow: 1;
  list-style: none;
  padding-left: 0;
  overflow: scroll;
`;
export const ListItemWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0;
  flex-grow: 1;
`;
export const ListCompleted = styled.input`
  width: 20px;
  height: 20px;
`;
export const ListItem = styled.li`
  width: 100%;
  font-size: 1rem;
  padding: 0 10px;
  text-decoration: ${(props) => props.isCompleted && "line-through"};
`;
export const AddIcon = styled(GrAdd)`
  margin-left: 5px;
  font-size: 24px;
  cursor: pointer;
`;
export const EditIcon = styled(MdEdit)`
  margin-left: 5px;
  font-size: 24px;
  cursor: pointer;
`;
export const DeleteIcon = styled(MdDelete)`
  margin-left: 5px;
  font-size: 24px;
  cursor: pointer;
`;
export const EditInput = styled.input`
  width: 100%;
  height: 24px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid black;
  font-size: 1rem;
  :focus {
    outline: none;
  }
`;
export const EditModeButton = styled.button`
  width: 50px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-left: 5px;
`;
