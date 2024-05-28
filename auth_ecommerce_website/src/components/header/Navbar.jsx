import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
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
                    <NavLink to="/auth" className={styles.nav_nav}> login </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={styles.nav_nav}> logout </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;