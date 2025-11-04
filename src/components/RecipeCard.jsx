import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
// You will need a placeholder image for recipes that don't have one
// import placeholder from '../assets/placeholder.png'; 

const RecipeCard = ({ recipe }) => {
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();
    const favorite = isFavorite(recipe.id);

    const handleFavoriteClick = (e) => {
        e.preventDefault(); // Prevent navigating when clicking the button
        if (favorite) {
            removeFavorite(recipe.id);
        } else {
            addFavorite(recipe);
        }
    };

    return (
        <Link to={`/recipe/${recipe.id}`} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/400" }} />
            <div className="recipe-card-content">
                <h3>{recipe.title}</h3>
                <button onClick={handleFavoriteClick} className="favorite-btn">
                    {favorite ? '❤️' : '🤍'}
                </button>
            </div>
        </Link>
    );
};

export default RecipeCard;