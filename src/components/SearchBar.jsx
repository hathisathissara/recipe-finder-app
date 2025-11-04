import { useState } from "react";

const SearchBar = ({ onSearch }) => {

    const [inputValue, setInputValue] = useState('')
    const [ingredients, setIngredients] = useState([]);

    const handleAddIngredient = (e) => {
        if (e.key == 'Enter' && inputValue.trim() !== '') {
            e.preventDefault();
            setIngredients([...ingredients, inputValue.trim()]);
            setInputValue('');
        }
    }

    const removeIngredient = (indexToRemove) => {
        setIngredients(ingredients.filter((_, index) => index !== indexToRemove));
    }
    const handleSearchClick = () => {
        if (ingredients.length > 0) {
            onSearch(ingredients);
        }
    }


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
            <input type="text"
                value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleAddIngredient}
                placeholder="Add ingredients and press Enter..."
            />
            <button onClick={handleSearchClick} className="search-button">
                Find Recipes
            </button>
        </div>
    )
}

export default SearchBar;