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

                <h1> {isLogIn ? "Login" : "SignUp"} </h1>

                <form action="#" className={styles.form_div}>

                    <div className={styles.email_div}>
                        <input type="email" placeholder="emailId" required
                            className="form-control"
                        />
                    </div>
                    <div className={styles.password_div}>
                        <input type="password" placeholder="password" required
                            className="form-control"
                        />
                    </div>

                    <div className={styles.actions}>
                        <button> {isLogIn ? "Login" : "Create Account"} </button>

                        <button onClick={switchModeToggler}>
                            {isLogIn ? "Create new account" : "Login with existing account"}
                        </button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default AuthForm;