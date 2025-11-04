import React, { createContext, useContext, useState } from 'react';
import { findRecipesByIngredients } from '../api/spoonacular';

// 1. Create the context
const SearchContext = createContext();

// 2. Create a custom hook for easy access
export const useSearch = () => useContext(SearchContext);

// 3. Create the Provider component that will wrap your app
export const SearchProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // The main search function now lives here
    const handleSearch = async (searchIngredients) => {
        if (searchIngredients.length === 0) return;

        setIsLoading(true);
        setError(null);
        setIngredients(searchIngredients); // Save the ingredients used for the search

        try {
            const data = await findRecipesByIngredients(searchIngredients);
            setRecipes(data);
        } catch (err) {
            setError('Failed to fetch recipes. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    // The value that will be available to all consuming components
    const value = {
        recipes,
        ingredients,
        isLoading,
        error,
        handleSearch,
    };

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
};