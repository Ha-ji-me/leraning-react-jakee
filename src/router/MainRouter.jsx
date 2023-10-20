import React, { Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { Page1 } from "./Page1"
import { Page1DetailA } from "./Page1DetailA"
import { Page1DetailB } from "./Page1DetailB"
import { Page2 } from "./Page2"
import { UrlParameter } from "./UrlParameter"

export function MainRouter() {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/page1">
          <Route index={true} element={<Page1 />} />
          <Route path="detail-a" element={<Page1DetailA />} />
          <Route path="detail-b" element={<Page1DetailB />} />
        </Route>
        <Route path="/page2">
          <Route index={true} element={<Page2 />} />
          <Route path=":id" element={<UrlParameter />} />
        </Route>
    </Routes>
  )
}
