
import { useContext } from "react";
import styles from "./ProfilePage.module.css";
import ContextApi from "../store/ContextApi";

const ProfilePage = () => {

    const { token } = useContext(ContextApi);

    const handlerOnChangePassProfile = async (event) => {
        try {
            event.preventDefault();

            const changePassDetails = {
                pass: event.target.changepass.value,
                conpass: event.target.changeconfirmpass.value,
            };

            console.log(changePassDetails);

            if (changePassDetails.pass !== changePassDetails.conpass) {
                console.log("Password not match");
                return;
            }

            const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD1lOMdT2N9SYAGevw979kq67kvXyFqUFc`, {
                method: "POST",
                body: JSON.stringify({
                    idToken: token,
                    password: changePassDetails.pass,
                    returnSecureToken: false
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            console.log('Response:', response.data)
            console.log("Password Change Successfully");
            alert("Password Change Successfully");

        } catch (error) {
            console.log(error, "Something went wrong in change password");
            alert("Password does not match");
        }

        event.target.changepass.value = "";
        event.target.changeconfirmpass.value = "";
    };

    return (
        <div className={styles.profile_page__div}>
            <h1> Change User Profile Password. </h1>
            <form className={styles.form_profile} onSubmit={handlerOnChangePassProfile}>
                {/* <label> Change Your Password </label> */}
                <div className="first_pass">
                    <input
                        type="password"
                        id="changepass"
                        placeholder="enter your new password"
                        className="form-control"
                        minLength={7}
                        required
                    />
                </div>

                <div className="second_pass">
                    <input
                        type="password"
                        id="changeconfirmpass"
                        placeholder="confirm your new password"
                        className="form-control"
                        minLength={7}
                        required
                    />
                </div>

                <div className={styles.actions_profile}>
                    <button type="submit"> Change Password </button>
                </div>
            </form>
        </div>
    );
};

export default ProfilePage;
