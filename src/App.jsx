import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css'

function PortfolioLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <div className="app">
      <div className="bg-shapes">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>

      <Routes>
        <Route path="/" element={<PortfolioLayout><Home /></PortfolioLayout>} />
        <Route path="/about" element={<PortfolioLayout><About /></PortfolioLayout>} />
        <Route path="/experience" element={<PortfolioLayout><Experience /></PortfolioLayout>} />
        <Route path="/skills" element={<PortfolioLayout><Skills /></PortfolioLayout>} />
        <Route path="/projects" element={<PortfolioLayout><Projects /></PortfolioLayout>} />
        <Route path="/contact" element={<PortfolioLayout><Contact /></PortfolioLayout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
