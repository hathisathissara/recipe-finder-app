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

    if (isLoading)
        return (
            <div className="text-center py-5 text-secondary fs-5">
                Loading recipe details...
            </div>
        );

    if (error)
        return (
            <div className="text-center text-danger fw-semibold py-5">
                {error}
            </div>
        );

    if (!details) return null;

    return (
        <div className="container my-5">
            {/* Recipe Header */}
            <div className="card shadow border-0">
                <div className="card-body">
                    <h1 className="card-title text-success text-center mb-4 fw-bold">
                        {details.title}
                    </h1>

                    <img
                        src={details.image}
                        alt={details.title}
                        className="img-fluid rounded mb-4"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/600x400';
                        }}
                    />

                    {/* Meta info */}
                    <div className="d-flex justify-content-center gap-4 mb-3 text-muted">
                        <span>🍽️ Servings: {details.servings}</span>
                        <span>⏳ Ready in: {details.readyInMinutes} mins</span>
                    </div>

                    {/* Summary */}
                    <div
                        className="mb-4 text-secondary"
                        dangerouslySetInnerHTML={{ __html: details.summary }}
                    />
                </div>
            </div>

            {/* Ingredients and Instructions */}
            <div className="row mt-4 g-4">
                <div className="col-md-4">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <h4 className="text-success fw-bold mb-3">Ingredients</h4>
                            <ul className="list-group list-group-flush">
                                {details.extendedIngredients.map((ing) => (
                                    <li
                                        key={ing.id}
                                        className="list-group-item border-0 ps-0 py-1"
                                    >
                                        {ing.original}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <h4 className="text-warning fw-bold mb-3">Instructions</h4>
                            {details.analyzedInstructions[0]?.steps ? (
                                <ol className="ps-3">
                                    {details.analyzedInstructions[0].steps.map((step) => (
                                        <li key={step.number} className="mb-2">
                                            {step.step}
                                        </li>
                                    ))}
                                </ol>
                            ) : (
                                <p className="text-muted fst-italic">
                                    No instructions available for this recipe.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;
