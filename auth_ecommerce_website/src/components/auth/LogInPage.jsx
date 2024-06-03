import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./SignUpPage.module.css";
import { useContext } from "react";
import ContextApi from "../store/ContextApi";
import ProductPage from "../pages/ProductPage";

const LogInPage = () => {

    const { login } = useContext(ContextApi);

    const redirectToSignUp = useHistory();

    const redirectToProductPage = useHistory();

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
            console.log('idToken:', res.data.idToken)
            login(res.data.idToken);
            // Here, by doing login(res.data.idToken) this we are make sure that the particular user only log's in not anyother else that's why we have pass the idToken as arugmnet in login. That idToken is going to be grabbed in ContextApi in login handler as parameter to execute the function to that particular user only should login;
            redirectToProductPage.replace("/product");
            // After login redirecting the user to ProductPage;

        } catch (error) {
            console.log(error, "Something went wrong with Login");
            alert("Email or Password is wrong");
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
