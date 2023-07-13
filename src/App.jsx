import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import ProjectsPage from "./pages/ProjectsPage"
import AboutPage from "./pages/AboutPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <>
      <div className="flex flex-col gap-5 items-center h-screen">
        <Navbar />
        <div className="flex flex-col w-full h-full items-center my-14">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
