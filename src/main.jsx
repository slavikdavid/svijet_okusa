import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './routes/HomePage.jsx'
import RecipePage from './routes/RecipePage.jsx'
import RecipesPage from './routes/RecipesPage.jsx'
import IngredientPage from './routes/IngredientPage.jsx'
import IngredientsPage from './routes/IngredientsPage.jsx'
import LoginPage from './routes/LoginPage.jsx'

const router = createBrowserRouter(
  [
    { path: "/", element: <HomePage />},
    { path: "/recipe", element: <RecipePage />},
    { path: "/recipes", element: <RecipesPage />},
    { path: "/ingredient", element: <IngredientPage />},
    { path: "/ingredients", element: <IngredientsPage />},
    { path: "/login", element: <LoginPage />},
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
