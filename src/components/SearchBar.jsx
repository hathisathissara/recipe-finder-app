import { useState } from 'react';
import { useSearch } from '../context/SearchContext';

const SearchBar = ({ onSearch }) => {
    const { ingredients: globalIngredients } = useSearch();

    const [inputValue, setInputValue] = useState('');
    const [ingredients, setIngredients] = useState(globalIngredients);

    const handleAddIngredient = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            e.preventDefault();
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
        <div className="card shadow-sm border-0 p-4 mb-4">
            <h4 className="text-center mb-3 text-success fw-bold">What's in your fridge?</h4>

            {/* Ingredient pills */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                {ingredients.map((ingredient, index) => (
                    <span
                        key={index}
                        className="badge bg-success d-flex align-items-center px-3 py-2"
                    >
                        {ingredient}
                        <button
                            onClick={() => removeIngredient(index)}
                            className="btn btn-sm btn-light ms-2 py-0 px-2"
                            style={{ lineHeight: '1' }}
                        >
                            ×
                        </button>
                    </span>
                ))}
            </div>

            {/* Input + Button */}
            <div className="d-flex justify-content-center">
                <input
                    type="text"
                    className="form-control w-50 me-2"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleAddIngredient}
                    placeholder="Add ingredients and press Enter..."
                />
                <button
                    onClick={handleSearchClick}
                    className="btn btn-warning fw-semibold"
                >
                    Find Recipes
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
