// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import RecipeDetail from './pages/RecipeDetail'; // Import the new page
import Navbar from './components/Navbar'; // Create a simple Navbar component
import './App.css'
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* Add this route */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;