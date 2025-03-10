import "../app/styles/stylesGlobal.css"
import { HashRouter, Route, Routes } from "react-router-dom"
import { Header } from "@/common/components/Header"
import { PublicPage } from "@/features/publicPage/ui/PublicPage"
import { SignIn } from "@/features/auth/ui"
import { ProfilePage } from "@/features/profile/ui"

const App = () => {
  return (
    <HashRouter basename={import.meta.env.VITE_PUBLIC_URL}>
      <div className="rootContainer">
        <div className="app-container">
          <Header />
          <main className="main-container">
            <Routes>
              <Route path="/" element={<PublicPage />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  )
}

export default App
