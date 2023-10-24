import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Top } from "../components/pages/Top"
import { Users } from "../components/pages/Users"
import { DefaultLayout } from "../components/templates/DefaultLayout"
import { HeaderOnly } from "../components/templates/HeaderOnly"
import { Edit } from "../components/pages/Edit"

const AtomicRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={ <DefaultLayout><Top /></DefaultLayout> } />
        <Route path="/users"
          element={ <HeaderOnly><Users /></HeaderOnly> } />
        <Route path="/edit"
          element={ <HeaderOnly><Edit /></HeaderOnly>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AtomicRouter