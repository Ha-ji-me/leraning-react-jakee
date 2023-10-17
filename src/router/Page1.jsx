import React, { BrowserRouter,Link, Route, Routes } from "react-router-dom"
import { Page1DetailA } from "./Page1DetailA"

export const Page1 = () => {
  return(
      <div>
        <h1>Page1です</h1>
        <Link to={"/page1/detail-a"}>detailA</Link>
        <br />
        <Link to={"/page1/detail-b"}>detailB</Link>
      </div>
  )
}