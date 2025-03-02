/*import "./App.css"*/
import "./app/styles/stylesGlobal.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./common/components/Header/Header"
import {PublicPage} from "./features/publicPage/ui/PublicPage"
import { SignIn } from "../src/features/auth/ui/SignIn"
import { ProfilePage } from "../src/features/profile/ui/index"

const App = () => {
  return (
    <BrowserRouter>
      <div className="rootContainer">
        <div className="app-container">
          <Header />
          <main className="main-container">
            <Routes>
              <Route path="/" element={<PublicPage/>} />
              <Route path="/login" element={<SignIn/>} />
              <Route path="/profile" element={<ProfilePage/>} />
            </Routes>
          </main>


        </div>

      </div>

    </BrowserRouter>
  )
}

export default App
