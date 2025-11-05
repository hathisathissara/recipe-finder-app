import React from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import { useSearch } from '../context/SearchContext'; // Import the custom hook

const Home = () => {
    // Get all state and functions from the global context
    const { recipes, isLoading, error, handleSearch } = useSearch();

    return (
        <div className="container my-5">
            {/* Search section */}
            <div className="text-center mb-4">
                <h1 className="mb-3 fw-bold text-primary">Find Your Perfect Recipe 🍲</h1>
                <p className="text-muted">Enter ingredients to discover amazing dishes!</p>
                <SearchBar onSearch={handleSearch} />
            </div>

            {/* Loading message */}
            {isLoading && (
                <div className="text-center mt-4">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-3 text-secondary">Loading recipes...</p>
                </div>
            )}

            {/* Error message */}
            {error && (
                <div className="alert alert-danger text-center mt-3" role="alert">
                    {error}
                </div>
            )}

            {/* Recipe list */}
            {!isLoading && !error && recipes.length > 0 && (
                <div className="mt-4">
                    <RecipeList recipes={recipes} />
                </div>
            )}

            {/* Initial message */}
            {!isLoading && !error && recipes.length === 0 && (
                <div className="text-center mt-5 text-muted">
                    <p>Enter some ingredients and find your next meal!</p>
                </div>
            )}
        </div>
    );
};

export default Home;
