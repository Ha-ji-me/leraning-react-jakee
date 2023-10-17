import React, { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";

function Router() {
  return(
    //router機能の有効化
    <BrowserRouter>
      <div className="Router">
        {/* パスの設定 */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/page1">
          <Route index={true} element={<Page1 />} />
          <Route path="detail-a" element={<Page1DetailA />} />
          <Route path="detail-b" element={<Page1DetailB />} />
        </Route>
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router