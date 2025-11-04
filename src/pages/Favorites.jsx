// src/pages/Favorites.jsx
import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import RecipeList from '../components/RecipeList';

const Favorites = () => {
    const { favorites } = useFavorites();

    return (
        <div>
            <h2>Your Favorite Recipes</h2>
            {favorites.length > 0 ? (
                <RecipeList recipes={favorites} />
            ) : (
                <p>You haven't saved any favorite recipes yet.</p>
            )}
        </div>
    );
};

export default Favorites;