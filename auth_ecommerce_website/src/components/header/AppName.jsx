import styles from "./AppName.module.css";
import Navbar from "./Navbar";

const AppName = () => {
    return (
        <div className={styles.header_container}>
            <nav className="navbar bg-primary" data-bs-theme="dark" style={{ color: "white" }}>
                <h1> Auth Ecom </h1>
                <div>

                    <Navbar></Navbar>

                </div>
            </nav>
        </div>
    )
}

export default AppName;