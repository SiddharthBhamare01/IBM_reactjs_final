import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/UserSlice';
import { useState } from "react";

const Logout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [afterLogout, setAfterLogout] = useState('');

    const logoutSubmit = () => {
        console.log('logoutSubmit');
        setAfterLogout(`You've logged out successfully!`);
        setTimeout(() => {
            dispatch(userLogout());
            navigate('/login');
        }, 2000);

    };

    return (
        <>
            <h1>Logout</h1>
            <button onClick={logoutSubmit} >Logout</button>
            {afterLogout && <p>{afterLogout}</p>}
        </>
    );
};

export default Logout;


