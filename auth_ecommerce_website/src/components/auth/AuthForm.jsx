import { useState } from "react";
import styles from "./AuthForm.module.css";


const AuthForm = () => {

    const [isLogIn, setIsLogIn] = useState(true);

    const switchModeToggler = () => {
        setIsLogIn((prevState) => !prevState);
    };

    return (
        <div className={styles.auth_form__div}>
            <div className={styles.auth_form__container}>

                <h1> {isLogIn ? "SignUp" : "Login"} </h1>
                <button onClick={switchModeToggler}> {isLogIn ? "Create Account" : "Existing Account"} </button>

            </div>
        </div>
    )
}

export default AuthForm;