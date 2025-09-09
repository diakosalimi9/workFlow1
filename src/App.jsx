import { BrowserRouter } from "react-router-dom"
import Loging from "./pages/Loging"
import Base from "./pages/Base"
import Controle from "./pages/Controle"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Loging />} />
        <Route path={`/utilisateurs`} element={<Utilisateurs />} />
        <Route path={'/base'} element={<Base />} />
        <Route path={'/controle'} element={<Controle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
