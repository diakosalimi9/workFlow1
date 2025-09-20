import { BrowserRouter , Routes , Route } from "react-router-dom"
import Loging from "./pages/Loging"
import Base from "./pages/Base"
import Controle from "./pages/Controle"
import Utilisateurs from "./pages/Utilisateurs"
import Coming from "./pages/Coming"
import SignUp from "./pages/SignUp"
import ForgettonPassword from "./pages/ForgettonPassword"
import Edit from "./pages/Edit"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Loging />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgettonpassword" element={<ForgettonPassword />} />
        <Route path={`/utilisateurs`} element={<Utilisateurs />} />
        <Route path={'/base'} element={<Base />} />
        <Route path={'/controle'} element={<Controle />} />
        <Route path={'/coming'} element={<Coming/>} />
        <Route path="/utilisateurs/:id" element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
