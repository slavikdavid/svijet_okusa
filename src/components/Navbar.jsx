import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { i18n } = useTranslation();

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
        <div>
      <select
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        value={i18n.language}
      >
        <option value="en">English</option>
        <option value="sl">Slovenian</option>
        <option value="hr">Croatian</option>
      </select>
    </div>
    </div>
    )
}

export default Navbar