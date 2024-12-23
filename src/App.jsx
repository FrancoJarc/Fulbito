import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { AuthProvider } from './context/AuthContext'
import { Card } from './pages/cancha/Card/Card'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { appRoutes, appRoutesSinMenu, logueoRuotes } from './routes/routes'
import { Registrarse } from "./pages/registrarse/Registrarse";
import { Footer } from './components/footer/Footer'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { ModalProvider } from './context/ModalContext'



function App() {
  return (<>

    <BrowserRouter>
      <AuthProvider>
        <ModalProvider>
          <ToastContainer />
          <Navbar />
          <Routes>
            {appRoutes.map(route => (
              <Route key={route.name} path={route.path} element={route.element} />
            ))}
            {logueoRuotes.map(route => (
              <Route key={route.name} path={route.path} element={route.element} />
            ))}
            {appRoutesSinMenu.map(route => (
              <Route key={route.name} path={route.path} element={route.element} />
            ))}
          </Routes>
          <Footer />
        </ModalProvider>
      </AuthProvider>
    </BrowserRouter>

  </>
  )
}

export default App
