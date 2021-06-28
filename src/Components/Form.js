import React, { useState } from 'react'
import SignupForm from "./SignupForm"
import SignUpFromSuccess from './SignUpFromSuccess'

const Form = () => {
 const [formIsSubmitted, setFormIsSubmitted] = useState(false)

 const submitForm = () => {
   setFormIsSubmitted(true)
 }
    return (
        <div>
         {!formIsSubmitted ? (
           <SignupForm submitForm={submitForm} />
         ) : (
           <SignUpFromSuccess />
         )} 
        </div>
    )
}

export default Form
