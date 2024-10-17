const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');

exports.hello = async (req,res) => {
    res.status(200).json({message:'Hello From User Service'});
}

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password: hashedPassword });
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ error: 'User not found' });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ error: 'Invalid credentials' });

        
        res.json({ message: 'Login successful'});
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
};

exports.getAllUsers = async (req, res) => { 
    try {
        const users = await User.findAll({ attributes: ['username', 'email'] }); 
            res.status(200).json(users); 
    } 
    catch (error) { 
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
};
