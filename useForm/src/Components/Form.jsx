import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css"

const Form = () => {

    const { register, handleSubmit, formState: { errors, isSubmitSuccessful, isSubmitted } } = useForm();


    const handleSubmitForm = (data) => {
        console.log(data)
    }


    console.log(isSubmitSuccessful)

    return (
        <>
            <div className="parent-container">
                <form onSubmit={handleSubmit(handleSubmitForm)}>

                    { isSubmitSuccessful && <p>Registration is Successful!</p>}

                    <label htmlFor="firstname">Enter Firstname : </label> <br />
                    <input type="text" placeholder="Firstname"
                        {...register("firstname", {
                            required: "firstname is required"
                        })}
                    />
                    {errors.firstname && <p>{errors.firstname.message}</p>}
                        <br />
                    <label htmlFor="lastname">Enter Lastname : </label> <br />
                    <input type="text" placeholder="Lastname"
                        {...register("lastname", {
                            required: "lastname is required"
                        })}
                    />
                    {errors.lastname && <p>{errors.lastname.message}</p>}
                    <br />
                    <label htmlFor="email">Enter E-mail : </label> <br />
                    <input type="email" placeholder="Enter E-mail"
                        {...register("email", {
                            required: "email is required",
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,}/,
                                message: "should have a character or Number. Missing '@', '.' symbol."
                            }
                        })}

                    />
                    {errors.email && <p>{errors.email.message}</p>}

                    <br />
                    <label htmlFor="password">Enter Password : </label> <br />
                    <input type="password" placeholder="Enter Password"
                        {...register("password", {
                            required: "password is required",
                            minLength: {
                                value: 5,
                                message: "minimum length should be 5 or more than that"
                            },
                            pattern: {
                                value : /[a-z]+[0-9]+[A-Z]+[@#$%&]/, //add your own expression
                                message: "should have atleast one capital letter. should have atleast one number. should have atleast one special character"
                            }
                        })}

                    />
                    {errors.password && <p>{errors.password.message}</p>}
                    <br />
                    <input className="btn" type="submit" value={"Register"} />
                </form>
            </div>

        </>
    )
}

export default Form;