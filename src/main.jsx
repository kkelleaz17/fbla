import React from 'react'; // Importing the React library
import ReactDOM from 'react-dom/client'; // Importing the ReactDOM library
import { Route, BrowserRouter, Routes } from 'react-router-dom'; // Importing Route, BrowserRouter, and Routes components from 'react-router-dom'
import Home from './pages/Home.jsx'; // Importing the Home component from './pages/Home.jsx'
import Benefits from './pages/Benefits.jsx'; // Importing the Benefits component from './pages/Benefits.jsx'
import Application from './pages/Application.jsx'; // Importing the Application component from './pages/Application.jsx'
import AvailablePositions from './pages/AvailablePositions.jsx'; // Importing the AvailablePositions component from './pages/AvailablePositions.jsx'
import Navbar from './components/Navbar.jsx'; // Importing the Navbar component from './components/Navbar.jsx'
import Footer from './pages/Footer.jsx'; // Importing the Footer component from './pages/Footer.jsx'
import AvailablePosition from './pages/AvailablePosition.jsx'; // Importing the AvailablePosition component from './pages/AvailablePosition.jsx'
import Faq from './pages/Faq.jsx'; // Importing the Faq component from './pages/Faq.jsx'
import Policy from './pages/Policy.jsx'; // Importing the Policy component from './pages/Policy.jsx'
import NotPage from './pages/NotPage.jsx'; // Importing the NotPage component from './pages/NotPage.jsx'
import './main.css'; // Importing the 'main.css' file

ReactDOM.createRoot(document.getElementById('root')).render(
  <> {/* React fragment */}
    <BrowserRouter> {/* BrowserRouter component for routing */}
      <Navbar /> {/* Navbar component */}
      <Routes> {/* Routes component for defining routes */}
        <Route element={<Home />} path="/" /> {/* Route for the Home component */}
        <Route element={<Benefits />} path="/benefits" /> {/* Route for the Benefits component */}
        <Route element={<Policy />} path="/privacy" /> {/* Route for the Policy component */}
        <Route element={<Faq />} path="/faq" /> {/* Route for the Faq component */}
        <Route element={<Application />} path="/application/:position" /> {/* Route for the Application component with a parameter */}
        <Route element={<AvailablePositions />} path="/available-positions" /> {/* Route for the AvailablePositions component */}
        <Route element={<AvailablePosition />} path="/available-positions/:position" /> {/* Route for the AvailablePosition component with a parameter */}
        <Route element={<NotPage />} path="*" /> {/* Route for the NotPage component, matches any other paths */}
      </Routes>
      <Footer /> {/* Footer component */}
    </BrowserRouter>
  </>, // Closing the React fragment
);