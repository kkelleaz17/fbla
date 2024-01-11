import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route,BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Benefits from './pages/Benefits.jsx'
import Application from './pages/Application.jsx'
import AvailablePositions from './pages/AvailablePositions.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './pages/Footer.jsx'
import './main.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Benefits />} path="/benefits" />
      <Route element={<Application />} path="/application" />
      <Route element={<AvailablePositions />} path="/available-positions" />
      <Route element={<h1>Not Found</h1>} path="*" />
    </Routes>
    <Footer />
  </BrowserRouter></>,
)