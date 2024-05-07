
// UserService.js

import axios from 'axios';

const BASE_URL = 'http://localhost:2000';

const UserService = {

    registerUser: async (userData) => {
        console.log(userData);
        try {
            const response = await axios.post(`${BASE_URL}/register`, userData);
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
            // return error;
            throw new Error(error);
        }
    },

    loginUser: async (credentials) => {
        console.log(credentials);
        try {
            const response = await axios.post(`${BASE_URL}/login`, credentials);
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },

    updateUserProfile: async (updatedData, token) => {
        console.log(updatedData);
        try {
            const response = await axios.put(`${BASE_URL}/users/${updatedData._id}`, updatedData, {
                headers: { authorization: `Bearer ${token}` }
            });
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
};

export default UserService;


// UserService.js

// import axios from 'axios';

// const BASE_URL = 'http://localhost:2000';

// const UserService = {

//     registerUser: (userData) => {
//         console.log(userData);
//         axios.post(`${BASE_URL}/register`, userData)
//             .then((response) => {
//                 console.log(response);
//                 return response.data;
//             })
//             .catch((error) => {
//                 console.log(error);
//                 throw new Error(error);
//             });
//     },

//     loginUser: (credentials) => {
//         console.log(credentials);
//         axios.post(`${BASE_URL}/login`, credentials)
//             .then((response) => {
//                 console.log(response);
//                 return response.data;
//             })
//             .catch((error) => {
//                 console.log(error);
//                 throw new Error(error);
//             });
//     },

//     updateUserProfile: async (updatedData, token) => {
//         console.log(updatedData);
//         axios.put(`${BASE_URL}/users/${updatedData._id}`, updatedData, {
//             headers: { authorization: `Bearer ${token}` }
//         })
//             .then((response) => {
//                 console.log(response);
//                 return response.data;
//             })
//             .catch((error) => {
//                 console.log(error);
//                 throw new Error(error);
//             });
//     }
// };

// export default UserService;
