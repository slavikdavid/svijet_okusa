import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './routes/HomePage';
import RecipePage from './routes/RecipePage';
import RecipesPage from './routes/RecipesPage';
import IngredientPage from './routes/IngredientPage';
import IngredientsPage from './routes/IngredientsPage';
import LoginPage from './routes/LoginPage';
import ProfilePage from './routes/ProfilePage';
import EditProfilePage from './routes/EditProfilePage';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe" element={<RecipePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/ingredient" element={<IngredientPage />} />
        <Route path="/ingredients" element={<IngredientsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
