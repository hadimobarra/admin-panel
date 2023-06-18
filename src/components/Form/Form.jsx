import React from "react";
import './Form.scss';
import useInput from "../UI/Input/useInput";
import { validateEmail, validateName } from "../Validation/validation";

const Form = (props) => {
    // Name input
    const {
        value: enterdName,
        valueChangeHandler: nameChangeHandler,
        inputBlureHandler: nameBlureHandler,
        hasError:enteredNameIsInValid,
        reset: resetNameInput,
        isValid: nameIsValid,
    } = useInput(validateName)
    // Email input 
    const {
        value: enterdEmail,
        valueChangeHandler: emailChangeHandler,
        inputBlureHandler: emailBlureHandler,
        hasError: enteredEmailIsInValid,
        reset: resetEmailInput, 
        isValid: emailIsValid,
    } = useInput(validateEmail);
    // Title input
    const {
        value: enterdTitle,
        valueChangeHandler: titleChangeHandler,
        inputBlureHandler: titleBlureHandler,
        hasError:enteredTitleIsInvalid,  
        reset: resetTitleInput,
        isValid: titleIsValid,
    } = useInput((event) => event.trim() !== '');

    let formIsvalid = false;
    if (nameIsValid && emailIsValid && titleIsValid) {
        formIsvalid = true;
    }

    // Submit form function
    const onSubmitHandler = event => {
        event.preventDefault();

        if (formIsvalid) {
            const formData = {
                name: enterdName,
                email: enterdEmail,
                title: enterdTitle
            }
            props.onSubmit(formData);
        } else {
            return
        }
        resetNameInput();
        resetEmailInput();
        resetTitleInput();
        props.submited();
    }

    return (
        <form onSubmit={onSubmitHandler} >
            <h2 style={{color: "#6C757D"}}>Fill out the form </h2>
        
            <input type="text" placeholder="Enter name" name="name" value={enterdName} onChange={nameChangeHandler} onBlur={nameBlureHandler}/>
            {enteredNameIsInValid && <p style={{color: "red"}} >Name can not be empty and must include characters  </p>}
            
            <input type="email" placeholder="Enter email" name="email" value={enterdEmail} onChange={emailChangeHandler} onBlur={emailBlureHandler}/>
            {enteredEmailIsInValid && <p style={{color: "red"}} >Enter a valid Email</p>}
            
            <input type="text" placeholder="Enter title" name="title" value={enterdTitle} onChange={titleChangeHandler} onBlur={titleBlureHandler} />
            {enteredTitleIsInvalid && <p style={{color: "red"}} >Title can not be empty</p>}
            <input type="submit" className="formSubmit" />
        </form>
    )
}

export default Form;