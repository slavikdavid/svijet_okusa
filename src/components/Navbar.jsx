import React from "react";

const Navbar = () => {
    return <div>
        <h1>Navbar</h1>
        <Link to='/'>Home</Link>
        <Link to='/recipe'>Recipe (individual)</Link>
        <Link to='/recipes'>Recipes</Link>
        <Link to='/ingredient'>Ingredient (individual)</Link>
        <Link to='/ingredients'>Ingredients</Link>
        <Link to='/login'>Login</Link>
    </div>
}

export default Navbar