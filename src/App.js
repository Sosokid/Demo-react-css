import './App.css';
import "./input.css";
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DetailsPage from './pages/DetailsPage';
import Navbar from './companants/Navbar';

function App() {
  return (
  <div className='bg-gradient-to-b from-[#757373] to-[#555353] h-screen'>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/details" element={<DetailsPage />} />
    </Routes>
  </div>
  );
}

export default App;
