// src/context/FavoritesContext.jsx
import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useLocalStorage('favorites', []);

    const addFavorite = (recipe) => {
        setFavorites((prev) => [...prev, recipe]);
    };

    const removeFavorite = (recipeId) => {
        setFavorites((prev) => prev.filter((recipe) => recipe.id !== recipeId));
    };

    const isFavorite = (recipeId) => {
        return favorites.some((recipe) => recipe.id === recipeId);
    };

    const value = { favorites, addFavorite, removeFavorite, isFavorite };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
};