

const AppName = () => {
    return (
        <>
            <nav className="navbar bg-primary" data-bs-theme="dark" style={{ color: "white" }}>
                <h1> Auth Ecom </h1>
                <div>
                    <div>
                        <ul>
                            <li><a href="/"> home </a></li>
                            <li><a href="/"> profile </a></li>
                            <li><a href="/"> products </a></li>
                            <li><a href="/"> login </a></li>
                            <li><a href="/"> logout </a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AppName;