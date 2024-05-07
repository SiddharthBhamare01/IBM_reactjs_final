// UpdateProfile.js 

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userUpdateProfile } from "../../redux/UserSlice";
import UserService from "../../services/UserService";

const UpdateProfile = () => {
    console.log('UpdateProfile');
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.loggedInUser);
    const token = useSelector(store => store.user.jwtToken);
    console.log(userData);
    const [formData, setFormData] = useState(userData);

    const handleChange = (evt) => {
        console.log(evt.target);
        console.log(formData);
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = async (evt) => {
        console.log(formData);
        evt.preventDefault();
        try {
            const user = await UserService.updateUserProfile(formData, token);
            console.log(user);
            dispatch(userUpdateProfile(user));
        }
        catch (error) {
            console.log(error);
            if (error.code === 'ERR_BAD_REQUEST')
                alert(error.message);
        }
    };

    return (
        <>
            <h1>Update Your Profile</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" name="firstName" value={formData.firstName}
                    onChange={handleChange} autoFocus required />
                <br />
                <label>Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName}
                    onChange={handleChange} required />
                <br />
                <label>Phone:</label>
                <input type="number" name="phone" value={formData.phone}
                    onChange={handleChange} required />
                <br />
                <label>Email:</label>
                <input type="email" name="email" value={formData.email}
                    onChange={handleChange} required />
                <br />
                <label>Avatar:</label>
                <input type="text" name="avatar" value={formData.avatar}
                    onChange={handleChange} />
                <br />
                <button type="submit">Update Your Profile</button>
            </form>
        </>
    );
};

export default UpdateProfile;
