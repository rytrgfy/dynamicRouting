const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Ensure environment variables are loaded
require('dotenv').config();
// Adjust the path according to your project structure

exports.signup = async(req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({ name, email, password });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = {
            user: {
                id: user.id,
            },
        };

        if (!process.env.JWT_SECRET) {
            console.error('JWT_SECRET is not defined in the environment variables');
            return res.status(500).send('Server error');
        }

        jwt.sign(
            payload,
            process.env.JWT_SECRET, { expiresIn: 360000 },
            (err, token) => {
                if (err) {
                    console.error('Error signing token:', err);
                    throw err;
                }
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.login = async(req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = {
            user: {
                id: user.id,
            },
        };

        if (!process.env.JWT_SECRET) {
            console.error('JWT_SECRET is not defined in the environment variables');
            return res.status(500).send('Server error');
        }

        console.log('JWT_SECRET:', process.env.JWT_SECRET);
        console.log('Payload:', payload);

        jwt.sign(
            payload,
            process.env.JWT_SECRET, { expiresIn: 360000 },
            (err, token) => {
                if (err) {
                    console.error('Error signing token:', err);
                    throw err;
                }
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};