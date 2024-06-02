import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./SignUpPage.module.css";

const LogInPage = () => {
    const redirectToSignUp = useHistory();

    const handlerOnRedirectLogin = () => {
        redirectToSignUp.replace("/signup");
    };

    const handlerOnSubmitForm = async (event) => {
        try {
            event.preventDefault();

            const logInDetails = {
                Email: event.target.email.value,
                Password: event.target.password.value,
            };

            console.log(logInDetails);

            const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD1lOMdT2N9SYAGevw979kq67kvXyFqUFc`, {
                email: logInDetails.Email,
                password: logInDetails.Password,
                returnSecureToken: true
            })

            console.log('Response:', res.data)
            console.log("Login Successfully");

        } catch (error) {
            console.log(error, "Something went wrong with Login");
        }

        event.target.email.value = "";
        event.target.password.value = "";

    };

    return (
        <div className={styles.auth_form__div}>
            <div className={styles.auth_form__container}>
                <h1> Login </h1>

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
                            className="form-control"
                            minLength={6}
                            required
                        />
                    </div>

                    <div className={styles.actions}>
                        <button> Login </button>
                        <button onClick={handlerOnRedirectLogin}> Create Account </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogInPage;