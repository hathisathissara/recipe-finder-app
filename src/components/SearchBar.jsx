import { useState } from 'react';
import { useSearch } from '../context/SearchContext'; // Import useSearch

const SearchBar = ({ onSearch }) => {
    // Get the globally stored ingredients to use as the initial state
    const { ingredients: globalIngredients } = useSearch();

    const [inputValue, setInputValue] = useState('');
    // The local state for pills now starts with the last-searched ingredients
    const [ingredients, setIngredients] = useState(globalIngredients);

    const handleAddIngredient = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            e.preventDefault();
            // Avoid adding duplicate ingredients
            if (!ingredients.includes(inputValue.trim())) {
                setIngredients([...ingredients, inputValue.trim()]);
            }
            setInputValue('');
        }
    };

    const removeIngredient = (indexToRemove) => {
        setIngredients(ingredients.filter((_, index) => index !== indexToRemove));
    };

    const handleSearchClick = () => {
        if (ingredients.length > 0) {
            onSearch(ingredients);
        }
    };

    return (
        <div className="search-container">
            <h3>What's in your fridge</h3>
            <div className="ingredient-pills">
                {ingredients.map((ingredient, index) => (
                    <span key={index} className="pill">
                        {ingredient}
                        <button onClick={() => removeIngredient(index)}>x</button>
                    </span>
                ))}
            </div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleAddIngredient}
                placeholder="Add ingredients and press Enter..."
            />
            <button onClick={handleSearchClick} className="search-button">
                Find Recipes
            </button>
        </div>
    );
};

export default SearchBar;