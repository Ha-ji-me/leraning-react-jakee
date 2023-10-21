import React, { Link } from "react-router-dom"

export const Page2 = () => {
  return(
    <div>
      <h1>Page2です</h1>
      <Link to={"/page2/999"}>URLパラメータ</Link>
      <br />
      <Link to={"/page2/999?name=hoge"}>Queryパラメータ</Link>
    </div>
  )
}