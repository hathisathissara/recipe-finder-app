// src/pages/Favorites.jsx
import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import RecipeList from '../components/RecipeList';

const Favorites = () => {
    const { favorites } = useFavorites();

    return (
        <div className="container my-5">
            <div className="text-center mb-4">
                <h2 className="fw-bold text-primary">❤️ Your Favorite Recipes</h2>
                <p className="text-muted">View and manage the recipes you’ve saved.</p>
            </div>

            {favorites.length > 0 ? (
                <RecipeList recipes={favorites} />
            ) : (
                <div className="text-center mt-5">
                    <p className="text-secondary fs-5">
                        You haven’t saved any favorite recipes yet.
                    </p>
                    <p className="text-muted">Start adding your favorite dishes today!</p>
                </div>
            )}
        </div>
    );
};

export default Favorites;
