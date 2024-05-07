// user.controller.js 
import { generateToken } from '../services/auth.service.js';
import userService from '../services/user.service.js';

const registerUser = async (req, res, next) => {
    console.log('controller');
    console.log(req.body);
    try {
        const user = await userService.registerUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json(error);
    }
};

const loginUser = async (req, res, next) => {
    console.log('controller');
    console.log(req.body);
    try {
        const user = await userService.loginUser(req.body);
        const token = generateToken(user);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(401).json(error);
    }
};


const updateUserProfile = async (req, res, next) => {
    console.log('controller');
    console.log(req.body);
    const userId = req.params.id;
    const updatedData = req.body;
    try {
        const updatedUser = await userService.updateUserProfile(userId, updatedData);
        console.log(updatedUser);
        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

export { registerUser, loginUser, updateUserProfile };