import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { AuthProvider } from './context/AuthContext'
import { Card } from './pages/cancha/Card/Card'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { appRoutes, logueoRuotes } from './routes/routes'
import { Registrarse } from "./pages/registrarse/Registrarse";
import { Footer } from './components/footer/Footer'



function App() {
  return (<>

    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {appRoutes.map(route => (
            <Route key={route.name} path={route.path} element={route.element} />
          ))}
          {logueoRuotes.map(route => (
            <Route key={route.name} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>

  </>
  )
}

export default App
