import styled from "styled-components"
import { memo } from "react";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molculus/user/UserIconWithName";

export const UserCard = memo((props) => {
  const { user, isAdmin } = props;

  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} isAdmin={isAdmin} />
      <SDl>
        <dt>メール</dt>
        <dd>{ user.mail }</dd>
        <dt>電話番号</dt>
        <dd>{ user.tel }</dd>
        <dt>会社名</dt>
        <dd>{ user.office }</dd>
        <dt>WEB</dt>
        <dd>{ user.web }</dd>
      </SDl>
    </Card>
  )
})

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`