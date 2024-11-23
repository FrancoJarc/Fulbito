import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (<>
    <BrowserRouter>
      <AuthProvider>
        <Navbar/>
        <Routes> Falta el routes.map</Routes>
        
      </AuthProvider>
    </BrowserRouter>
  </>
  )
}

export default App
