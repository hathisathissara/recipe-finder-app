import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
    if (!recipes || recipes.length === 0) {
        return (
            <div className="text-center text-muted fs-5 py-5">
                No recipes found. Try searching for different ingredients!
            </div>
        );
    }

    return (
        <div className="container my-4">
            <div className="row g-4">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <RecipeCard recipe={recipe} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeList;
