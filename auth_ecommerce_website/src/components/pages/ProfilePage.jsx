import styles from "./ProfilePage.module.css";

const ProfilePage = () => {

    const handlerOnChangePassProfile = (event) => {
        event.preventDefault();

        const changePassDetails = {
            pass: event.target.changepass.value,
            conpass: event.target.changeconfirmpass.value,
        };

        console.log(changePassDetails);
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
                        required
                    />
                </div>

                <div className="second_pass">
                    <input
                        type="password"
                        id="changeconfirmpass"
                        placeholder="confirm your new password"
                        className="form-control"
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
