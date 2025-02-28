/*import "./App.css"*/
import "./app/styles/stylesGlobal.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./common/components/Header/Header"
import {PublicPage} from "./features/publicPage/ui/PublicPage"
import { SignIn } from "../src/features/auth/ui/SignIn"

const App = () => {
  return (
    <BrowserRouter>
      <main className="main-container">
        <Header />
        <Routes>
          <Route path="/" element={<PublicPage/>} />
          <Route path="/login" element={<SignIn/>} />
        </Routes>
      </main>

    </BrowserRouter>
  )
}

export default App
