import User from "../model/userModel.js";
import generateToken from '../config/generateToken.js';

// register user and if we want to navigate the user directly to homepage after registration then generate a web token
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            res.status(400);
            throw new Error('user already exists');
        }

        const user = await User.create({ name, email, password });
        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            });
        } else {
            res.status(400);
            throw new Error('invalid user data');
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

// get all user list (Admin)
export const getUserList = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
};


// login user authentication parameters and genarate a web token
export const userAuth = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            });
        } else {
            res.status(401);
            throw new Error('Invalid email or password');
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: error.message });
    }
};

// get the user profile informations
export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin
            })
        } else {
            res.status(404)
            throw new Error('User not found');
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// update the user informations by id
export const updateUserProfile = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.findById(req.user._id);
        if (user) {
            user.name = name || user.name;
            user.email = email || user.email;
            if (password) {
                user.password = password
            };

            const updatedUser = await user.save();
            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                password: updatedUser.password,
                token: generateToken(updatedUser._id)
            });
        } else {
            res.status(404);
            throw new Error('user not found');
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// delete user with id 
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (user) {
            await user.remove();
            res.json({ message: 'User removed!' });
        }
    } catch (error) {
        res.status(404);
        throw new Error('User not found!');
    }
};


// get user by id
export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id).select('-password');
        if (user) {
            res.json(user)
        } else {
            throw new Error('User not found!');
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// update user
export const updateUser = async (req, res) => {
    const { id, name, email, isAdmin } = req.body;
    try {
        const user = await User.findById(id);
        if (user) {
            user.name = name || user.name;
            user.email = email || user.email;
            user.isAdmin = isAdmin;

            const updatedUser = await user.save();
            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                isAdmin: updatedUser.isAdmin
            });
        } else {
            res.status(404);
            throw new Error('User not found!');
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
