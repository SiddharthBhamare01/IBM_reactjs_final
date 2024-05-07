import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menubar = () => {

    const loginStatus = useSelector(store => store.user.loginStatus);

    if (loginStatus) {
        return (
            <>
                <nav className="  navbar navbar-expand-lg bg-body-tertiary">
                    <div className="  container-fluid">
                        <Link className="  navbar-brand" to={'/'}><img height={'25px'} src="https://pngimg.com/uploads/ibm/ibm_PNG19660.png" alt="IBM Logo" /> </Link>
                        <button className="  navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                            <span className="  navbar-toggler-icon"></span>
                        </button>
                        <div className="  collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="  navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="  nav-item">
                                    <Link className="  nav-link" to={'/emp'}>Employee</Link>
                                </li>
                                <li className="  nav-item">
                                    <Link className="  nav-link" to={'/parent'}>Parent</Link>
                                </li>
                                <li className="  nav-item">
                                    <Link className="  nav-link" to={'/profile'}>Profile</Link>
                                </li>
                                <li className="  nav-item">
                                    <Link className="  nav-link" to={'/logout'}>Logout</Link>
                                </li>
                            </ul>
                            <form className="  d-flex" role="search">
                                <input className="  form-control me-2" type="search" placeholder="Search" />
                                <button className="  btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>

            </>
        );
    }
    else {
        return (
            <>
                <nav className="  navbar navbar-expand-lg bg-body-tertiary">
                    <div className="  container-fluid">
                        <Link className="  navbar-brand" to={'/'}><img height={'25px'} src="https://pngimg.com/uploads/ibm/ibm_PNG19660.png" alt="IBM Logo" /> </Link>
                        <button className="  navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                            <span className="  navbar-toggler-icon"></span>
                        </button>
                        <div className="  collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="  navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="  nav-item">
                                    <Link className="  nav-link" to={'/register'}>Register</Link>
                                </li>
                                <li className="  nav-item">
                                    <Link className="  nav-link" to={'/login'}>Login</Link>
                                </li>
                            </ul>
                            <form className="  d-flex" role="search">
                                <input className="  form-control me-2" type="search" placeholder="Search" />
                                <button className="  btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
};

export default Menubar;
