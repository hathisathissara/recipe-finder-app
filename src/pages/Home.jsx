import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import { findRecipesByIngredients } from '../api/spoonacular';
const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (ingredients) => {
        setIsLoading(true);
        setError(null);
        setRecipes([]);
        try {
            const data = await findRecipesByIngredients(ingredients);
            setRecipes(data);
        } catch (err) {
            setError('Failed to fetch recipes. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            {isLoading && <p>Loading recipes...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!isLoading && !error && <RecipeList recipes={recipes} />}
        </div>
    )
}
export default Home;