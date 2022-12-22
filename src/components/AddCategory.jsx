import { useState } from "react";

export const AddCategory = ( {onNewCategory}) => {
  
    
    const [inputValue, setInputValue] = useState('')

    const onInputChange =({target}) =>{
        // console.log( target.value);
        setInputValue( target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(inputValue);
        const onInputValue = inputValue.trim();
        if ( onInputValue.length <= 1) {
            setInputValue('');
            return;
        }
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(onInputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gif"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
        
        
    )
}
