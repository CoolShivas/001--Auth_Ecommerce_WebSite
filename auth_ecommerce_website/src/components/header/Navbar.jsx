import { useContext } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import ContextApi from "../store/ContextApi";

const Navbar = () => {

    const { logout } = useContext(ContextApi);

    const handlerOnLogOut = () => {
        console.log('logout')
        logout();
    };


    return (
        <div className={styles.navbar}>
            <ul className={styles.navbar_ultag}>
                <li>
                    <NavLink to="/home" className={styles.nav_nav}> home </NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className={styles.nav_nav}> profile </NavLink>
                </li>
                <li>
                    <NavLink to="/product" className={styles.nav_nav}> products </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={styles.nav_nav}> cart </NavLink>
                </li>
                <li>
                    <NavLink to="/auth" className={styles.nav_nav}> login </NavLink>
                </li>
                <li>
                    {/* <NavLink to="/" className={styles.nav_nav}> logout </NavLink> */}
                    <button className={styles.nav_nav} onClick={handlerOnLogOut}> Logout </button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;