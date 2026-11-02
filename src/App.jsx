import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LeftoverRecipe from './pages/LeftoverRecipe';
import WellnessGuide from './pages/WellnessGuide';
import FoodWasteUtilizer from './pages/FoodWasteUtilizer';
import FoodLinkAnalysis from './pages/FoodLinkAnalysis';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leftover" element={<LeftoverRecipe />} />
            <Route path="/wellness" element={<WellnessGuide />} />
            <Route path="/waste" element={<FoodWasteUtilizer />} />
            <Route path="/foodlink" element={<FoodLinkAnalysis />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

