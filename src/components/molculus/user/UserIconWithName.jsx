import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";
import { Link } from "react-router-dom";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImage height={160} width={160} src={image} alt={name} />
      <SNname>{ name }</SNname>
      {isAdmin && <SEdit><Link to="/edit">編集</Link></SEdit>}
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`;

const SImage = styled.img`
  border-radius: 50%;
`;

const SNname = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`