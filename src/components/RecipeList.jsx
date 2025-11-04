import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
    if (!recipes || recipes.length === 0) {
        return <p className="no-recipes-found">No recipes found. Try searching for different ingredients!</p>;
    }

    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;