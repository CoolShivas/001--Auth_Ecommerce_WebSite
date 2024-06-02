import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {

    const redirectToLogin = useHistory();

    const handlerOnRedirectLogin = () => {
        redirectToLogin.replace("/login");
    };

    const handlerOnSubmitForm = (event) => {
        event.preventDefault();

        const signUpData = {
            Email: event.target.email.value,
            Password: event.target.password.value,
            ConfirmPassword: event.target.confirmpassword.value,
        };

        console.log(signUpData);

        event.target.email.value = "";
        event.target.password.value = "";
        event.target.confirmpassword.value = "";

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
                        <button type="submit"> Create Account </button>
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
