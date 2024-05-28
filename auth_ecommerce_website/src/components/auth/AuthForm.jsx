import { useRef, useState } from "react";
import styles from "./AuthForm.module.css";


const AuthForm = () => {

    const [isLoading, setIsLoading] = useState(false);

    const [isLogIn, setIsLogIn] = useState(true);

    const switchModeToggler = () => {
        setIsLogIn((prevState) => !prevState);
    };

    const inputEmailRef = useRef();
    const inputPasswordRef = useRef();

    const handlerOnFormSubmit = async (event) => {
        try {
            event.preventDefault();

            const enteredEmail = inputEmailRef.current.value;
            const enteredPassword = inputPasswordRef.current.value;

            // console.log(enteredEmail);
            // console.log(enteredPassword);

            setIsLoading(true);
            let url;
            if (isLogIn) {
                url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
             AIzaSyD1lOMdT2N9SYAGevw979kq67kvXyFqUFc`
            }
            else {
                url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
             AIzaSyD1lOMdT2N9SYAGevw979kq67kvXyFqUFc`
            }
            await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                console.log(res);
                if (res.ok) {
                    return res.json();
                }
                else {
                    return res.json().then(() => {
                        let errMsg = "Authentication is failed";
                        throw new Error(errMsg);
                    })
                }
            }).then((response) => {
                console.log(response.idToken);
                setIsLoading(false);
            })
        } catch (error) {
            console.log(error.message);
            alert(error.message)
        }

        inputEmailRef.current.value = "";
        inputPasswordRef.current.value = "";
    };


    return (
        <div className={styles.auth_form__div}>
            <div className={styles.auth_form__container}>

                <h1> {isLogIn ? "Login" : "SignUp"} </h1>

                <form action="#" className={styles.form_div} onSubmit={handlerOnFormSubmit}>

                    <div className={styles.email_div}>
                        <input type="email" placeholder="emailId" required
                            className="form-control"
                            ref={inputEmailRef}
                        />
                    </div>
                    <div className={styles.password_div}>
                        <input type="password" placeholder="password" required
                            className="form-control"
                            ref={inputPasswordRef}
                        />
                    </div>

                    <div className={styles.actions}>
                        {!isLoading && <button> {isLogIn ? "Login" : "Create Account"} </button>}
                        {isLoading && <p className={styles.para_loading}> Sending Request...</p>}

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