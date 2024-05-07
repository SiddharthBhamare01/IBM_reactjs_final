import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/UserSlice";

const Login = () => {

    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [afterSubmit, setAfterSubmit] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleLoginSubmit = (evt) => {
        evt.preventDefault();
        console.log(loginData);
        UserService.loginUser(loginData)
            .then((response) => {
                console.log(response);
                setAfterSubmit(`Hi ${loginData.username}! You've logged in successfully!`);
                setTimeout(() => {
                    setLoginData({ username: '', password: '' });
                    dispatch(userLogin(response));
                    navigate('/profile');
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                setLoginData({ username: '', password: '' });
                setAfterSubmit(`Invalid credentials!`);
            });
    };

    return (
        <div className="container mt-3">
            <p className="display-4">Login Component</p>
            <p className="lead">Log into your account here.</p>
            <div className="col-4">
                <form className="form form-group mx-2 py-2 my-2 py-2" onSubmit={handleLoginSubmit}>
                    <input className="form-control" type="text" name="username" value={loginData.username}
                        onChange={handleChange} autoFocus required />
                    <br />
                    <input className="form-control" type="password" name="password" value={loginData.password}
                        onChange={handleChange} required />
                    <br />
                    <input className="form-control btn btn-outline-light" type="submit" value="Login" />
                </form>
                <p>Not yet registered? <Link to={'/register'}>Register</Link> </p>
            </div>
            {afterSubmit && <p className="lead">{afterSubmit}</p>}
        </div>
    );
};
export default Login;

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import UserService from "../../services/UserService";
// import { useDispatch } from "react-redux";
// import { userLogin } from "../../redux/UserSlice";

// const Login = () => {

//     const [loginData, setLoginData] = useState({ username: '', password: '' });
//     const [afterSubmit, setAfterSubmit] = useState('');
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleChange = (evt) => {
//         console.log(evt.target.name);
//         console.log(evt.target.value);
//         setLoginData({
//             ...loginData,
//             [evt.target.name]: evt.target.value
//         });
//     };

//     const handleLoginSubmit = (evt) => {
//         evt.preventDefault();
//         console.log(loginData);
//         UserService.loginUser(loginData)
//             .then((response) => {
//                 console.log(response);
//                 setAfterSubmit(`Hi ${loginData.username}! You've logged in successfully!`);
//                 setTimeout(() => {
//                     setLoginData({ username: '', password: '' });
//                     dispatch(userLogin(response));
//                     navigate('/profile');
//                 }, 2000);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setLoginData({ username: '', password: '' });
//                 setAfterSubmit(`Invalid credentials!`);
//             });
//     };

//     return (
//         <>
//             <h1 style={{ color: 'blue' }}>Login Component</h1>
//             <p>Login here</p>
//             <form onSubmit={handleLoginSubmit}>
//                 <input type="text" name="username" value={loginData.username}
//                     onChange={handleChange} autoFocus required />
//                 <br />
//                 <input type="password" name="password" value={loginData.password}
//                     onChange={handleChange} required />
//                 <br />
//                 <input type="submit" value="Login" />
//             </form>
//             {afterSubmit && <p>{afterSubmit}</p>}
//             <p>Not yet registered? <Link to={'/register'}>Register</Link> </p>
//         </>
//     );
// };
// export default Login;