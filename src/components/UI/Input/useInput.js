import {useState} from "react";

const useInput = (validateValue) => {
    const [inputValue, setInputValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueChangeHandler = event => {
        setInputValue(event.target.value);
    }

    const valueIsValid = validateValue(inputValue);
    const hasError = !valueIsValid && isTouched;

    const inputBlureHandler = () => {
        setIsTouched(true);
    }

    const resetInputValue = () => {
        setInputValue('');
        setIsTouched(false);
    }

    const reset = () => {
        setInputValue('');
        setIsTouched(false);
    }

    return {valueChangeHandler, resetInputValue,value: inputValue, isTouched,isValid: valueIsValid, inputBlureHandler, hasError, reset}
}

export default useInput;