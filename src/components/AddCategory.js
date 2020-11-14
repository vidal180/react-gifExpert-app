import { useState } from "react";
import Error from './Error';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories, categories }) => {

    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    //Al hacer enter se haga submit del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2 && categories !== '') {
            // Se hace con un callback que obtiene el estado anterior el cual se guarda en catego
            setCategories([
                inputValue
            ]);

            // Limpiar la caja de texto
            setInputValue('');

            // QUitar error
            setError(false);

        } else {
            setError(true);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            { (error) ? <Error /> : ''}
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory;