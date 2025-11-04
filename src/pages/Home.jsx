import React from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import { useSearch } from '../context/SearchContext'; // Import the custom hook

const Home = () => {
    // Get all state and functions from the global context
    const { recipes, isLoading, error, handleSearch } = useSearch();

    return (
        <div>
            {/* Pass the global search handler to the search bar */}
            <SearchBar onSearch={handleSearch} />

            {isLoading && <p>Loading recipes...</p>}

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Display the recipe list using the global recipes state */}
            {!isLoading && !error && recipes.length > 0 && <RecipeList recipes={recipes} />}

            {/* Initial message when no search has been performed */}
            {!isLoading && !error && recipes.length === 0 && (
                <p>Enter some ingredients and find your next meal!</p>
            )}
        </div>
    );
};

export default Home;