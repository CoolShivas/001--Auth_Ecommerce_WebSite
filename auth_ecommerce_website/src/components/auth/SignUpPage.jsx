import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./SignUpPage.module.css";
import { useState } from "react";

const SignUpPage = () => {

    const [isLoading, setIsLoading] = useState(false);

    const redirectToLogin = useHistory();

    const handlerOnRedirectLogin = () => {
        redirectToLogin.replace("/login");
    };

    const handlerOnSubmitForm = async (event) => {

        try {
            event.preventDefault();

            const signUpDetails = {
                Email: event.target.email.value,
                Password: event.target.password.value,
                ConfirmPassword: event.target.confirmpassword.value,
            };

            console.log(signUpDetails);
            setIsLoading(true);

            if (signUpDetails.Password !== signUpDetails.ConfirmPassword) {
                console.log("Password not matched");
                return; // Exit the function if passwords don't match
            }

            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD1lOMdT2N9SYAGevw979kq67kvXyFqUFc`, {
                email: signUpDetails.Email,
                password: signUpDetails.Password,
                returnSecureToken: true
            })


            console.log('Response:', response.data)
            console.log("SignUp Successfully");
            setIsLoading(false);
            alert("SignUp Successfully. Please, Login now.");


        } catch (error) {
            console.log(error, "Something went wrong");
            alert("Please, fill the details carefully!");
        }


        event.target.email.value = "";
        event.target.password.value = "";
        event.target.confirmpassword.value = "";
        setIsLoading(false);
    };


    return (
        <div className={styles.auth_form__div}>
            <div className={styles.auth_form__container}>
                <h1> Sign Up </h1>

                <form className={styles.form_div} onSubmit={handlerOnSubmitForm}>

                    <div className={styles.email_div}>
                        <input
                            type="email"
                            id="email"
                            placeholder="emailId"
                            className="form-control"
                            required
                        />
                    </div>

                    <div className={styles.password_div}>
                        <input
                            type="password"
                            id="password"
                            placeholder="password"
                            minLength={6}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className={styles.password_div}>
                        <input
                            type="password"
                            id="confirmpassword"
                            placeholder="confirm password"
                            minLength={6}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className={styles.actions}>
                        {!isLoading && <button type="submit"> Create Account </button>}
                        {isLoading && <p className={styles.para_loading}> Sending Request... </p>}
                        <button onClick={handlerOnRedirectLogin}>
                            Already! Have an Account
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
