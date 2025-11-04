import axios from "axios";

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const findRecipesByIngredients = async (ingredients) => {
    try {
        const ingredientString = ingredients.join(',');
        const response = await axios.get(`${BASE_URL}/findByIngredients`, {
            params: {
                ingredients: ingredientString,
                number: 20,
                apiKey: API_KEY
            },
        });
        return response.data;

    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
}
export const getRecipeDetails = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}/information`, {
            params: {
                includeNutrition: false,
                apiKey: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching details for recipe ${id}:`, error);
        throw error;
    }
};
