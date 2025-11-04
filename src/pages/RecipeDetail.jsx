import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from '../api/spoonacular';

const RecipeDetail = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await getRecipeDetails(id);
                setDetails(data);
            } catch (err) {
                setError('Could not fetch recipe details.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchDetails();
    }, [id]);

    if (isLoading) return <p className="loading-message">Loading details...</p>;
    if (error) return <p className="error-message">{error}</p>;
    if (!details) return null;

    return (
        <div className="recipe-detail">
            <h1>{details.title}</h1>
            <img src={details.image} alt={details.title} className="recipe-detail-image" />

            <div className="recipe-meta">
                <span>🍽️ Servings: {details.servings}</span>
                <span>⏳ Ready in: {details.readyInMinutes} minutes</span>
            </div>

            <div
                className="recipe-summary"
                dangerouslySetInnerHTML={{ __html: details.summary }}
            />

            <div className="recipe-instructions-container">
                <div className="ingredients">
                    <h2>Ingredients</h2>
                    <ul>
                        {details.extendedIngredients.map((ing) => (
                            <li key={ing.id}>{ing.original}</li>
                        ))}
                    </ul>
                </div>

                <div className="instructions">
                    <h2>Instructions</h2>
                    <ol>
                        {details.analyzedInstructions[0]?.steps.map((step) => (
                            <li key={step.number}>{step.step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;