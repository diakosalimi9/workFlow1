import { BrowserRouter, Route, Routes } from "react-router-dom"
import Loging from "./pages/Loging"
import Base from "./pages/Base"
import Controle from "./pages/Controle"
import Utilisateurs from "./pages/Utilisateurs"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Loging />} />
        <Route path={`/utilisateurs`} element={<Utilisateurs />} />
        <Route path={'/base'} element={<Base />} />
        <Route path={'/controle'} element={<Controle />} />
        <Route index element={<Loging />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
