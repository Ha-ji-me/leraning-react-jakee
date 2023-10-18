import React, { BrowserRouter, Link } from "react-router-dom";
import { MainRouter } from "./MainRouter";

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
      <MainRouter />
    </BrowserRouter>
  )
}

export default Router