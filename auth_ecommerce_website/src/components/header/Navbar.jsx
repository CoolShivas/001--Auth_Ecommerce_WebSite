import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import styles from "./Navbar.module.css";
import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ContextApi from "../store/ContextApi";

const Navbar = () => {

    const redirectToHomePage = useHistory();

    const { logout, isUserLogIn } = useContext(ContextApi);

    const handlerOnLogOut = () => {
        console.log("Logout Successfully");
        logout();
        redirectToHomePage.replace("/home");
    };


    return (
        <div className={styles.navbar}>
            <ul className={styles.navbar_ultag}>

                {/* <li>
                    <NavLink to="/home" className={styles.nav_nav}> home </NavLink>
                </li> */}

                {isUserLogIn && <>
                    <li>
                        <NavLink to="/profile" className={styles.nav_nav}> profile </NavLink>
                    </li>
                    <li>
                        <NavLink to="/product" className={styles.nav_nav}> products </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" className={styles.nav_nav}> <FaShoppingCart /> </NavLink>
                    </li>
                    <li>
                        <button className={styles.nav_logout} onClick={handlerOnLogOut}> <RiLogoutCircleRLine />
                        </button>
                    </li>
                </>}
                {/* If the user is LOGIN then navlink available to visible are the above mentioned only; */}



                {!isUserLogIn && <>
                    <li>
                        <NavLink to="/login" className={styles.nav_nav}> login </NavLink>
                    </li>
                </>}

            </ul>
        </div>
    )
}

export default Navbar;