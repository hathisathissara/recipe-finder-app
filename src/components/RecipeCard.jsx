import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

const RecipeCard = ({ recipe }) => {
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();
    const favorite = isFavorite(recipe.id);

    const handleFavoriteClick = (e) => {
        e.preventDefault(); // Prevent navigation on heart click
        if (favorite) {
            removeFavorite(recipe.id);
        } else {
            addFavorite(recipe);
        }
    };

    return (
        <Link
            to={`/recipe/${recipe.id}`}
            className="text-decoration-none text-dark"
        >
            <div className="card h-100 shadow-sm border-0">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="card-img-top"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/400";
                    }}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex justify-content-between align-items-center">
                    <h6 className="card-title mb-0 flex-grow-1">{recipe.title}</h6>
                    <button
                        onClick={handleFavoriteClick}
                        className="btn btn-link fs-4 text-danger"
                        title={favorite ? 'Remove from Favorites' : 'Add to Favorites'}
                    >
                        {favorite ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default RecipeCard;
