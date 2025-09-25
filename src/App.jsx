import { BrowserRouter, Routes, Route } from "react-router-dom"
import Loging from "./pages/Loging"
import Base from "./pages/Base"
import Controle from "./pages/Controle"
import Utilisateurs from "./pages/Utilisateurs"
import Coming from "./pages/Coming"
import SignUp from "./pages/SignUp"
import ForgettonPassword from "./pages/ForgettonPassword"
import Layout from "./component/partial/Layout/Layout"
import EditItemContext from "./context/EditItemContext"
import { AuthProvider } from "./context/AuthContext"
import Homepage from "./pages/Homepage"
import ProtectedRout from "./pages/ProtectedRout"
import Edit from "./component/ui/organism/edit/Edit"

function App() {

  return (
    <AuthProvider>
      <EditItemContext>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route index element={<ProtectedRout role={['user',"admin"]}>
                <Homepage />
              </ProtectedRout>} />
              <Route path="/login" element={<Loging />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgettonpassword" element={<ForgettonPassword />} />

              <Route path={`/utilisateurs`} element={<ProtectedRout role={['admin']}>
                <Utilisateurs />
              </ProtectedRout>} />

              <Route path={'/controle'} element={<ProtectedRout role={['admin']}>
                <Controle />
              </ProtectedRout>} />

              <Route path={'/coming'} element={<ProtectedRout role={['admin']}>
                <Coming />
              </ProtectedRout>} />

              <Route path={'/base'} element={<ProtectedRout role={['admin']}>
                <Base />
              </ProtectedRout>} />
              <Route path="/utilisateurs/:id" element={<Edit />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </EditItemContext>
    </AuthProvider>
  )
}

export default App
