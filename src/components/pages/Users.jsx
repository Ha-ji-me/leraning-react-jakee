import styled from "styled-components"
import { useLocation } from "react-router-dom";
import { SearchInput } from "../molculus/SearchInput"
import { UserCard } from "../organisms/user/UserCard";

export const Users = () => {
  const users = [...Array(10).keys()].map(((val) => {
    return {
      id: val,
      image: "https://source.unsplash.com/cjSUZMA2iW8",
      name: `baroho${val}`,
      mail: "baroho@gmail.com",
      tel: "080-2263-7332",
      office: "株式会社ばろほ",
      web: "baroho.com",
    }
  }));

  const { state } = useLocation();

  return (
    <SContainer>
      <h2>Users</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`