import React from "react";
import { Link, Route, Routes} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
        <h1>Navbar</h1>
        <p>
        <Link to="/">Home</Link>
        </p>
        <p>
        <Link to="/recipe">Recipe (individual)</Link>
        </p>
        <p>
        <Link to="/recipes">Recipes</Link>
        </p>
        <p>
        <Link to="/ingredient">Ingredient (individual)</Link>
        </p>
        <p>
        <Link to="/ingredients">Ingredients</Link>
        </p>
        <p>
        <Link to="/login">Login</Link>
        </p>
    </div>
    )
}

export default Navbar