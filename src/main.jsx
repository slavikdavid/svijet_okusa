import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./routes/HomePage";
import RecipePage from "./routes/RecipePage";
import RecipesPage from "./routes/RecipesPage";
import IngredientPage from "./routes/IngredientPage";
import IngredientsPage from "./routes/IngredientsPage";
import LoginPage from "./routes/LoginPage";
import ProfilePage from "./routes/ProfilePage";
import EditProfilePage from "./routes/EditProfilePage";
import MyRecipesPage from "./routes/MyRecipesPage";

import { ChakraProvider } from "@chakra-ui/react";

import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          {({ location }) => {
            if (location.pathname !== "/login") {
              return <Navbar />;
            }
            return null;
          }}
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/my-recipes" element={<MyRecipesPage />} />
          <Route path="/ingredient/:id" element={<IngredientPage />} />
          <Route path="/ingredients" element={<IngredientsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
