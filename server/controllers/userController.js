require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Users} = require('../models/models');

const generedeJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration (req, res) {
        const {name, surname, patronymic, email, password, role} = req.body;
        const img = req.file ? req.file.filename: null;
        try {
            const existingUserByEmail = await Users.findOne({where: {email}})
            if(existingUserByEmail) {
                return res.status(401).json({message: 'Пользователь с таким email уже зарегистрирован'})
            }
            const hashedPassword = await bcrypt.hash(password, 5)
            const user = await Users.create({
                name, 
                surname,
                patronymic,
                email,
                img,
                password: hashedPassword,
                role
            })
            const token = generedeJwt(user.id, user.email, user.role)
            return res.status(200).json({message: 'Пользователь зарегистрирован', user, token, role: user.role})
        } catch(e) {
            console.log(e)
            return res.status(500).json({message: 'Ошибка сервера'})
        }
    }
    
    async login (req, res) {
        const {email, password} = req.body;
        try {
            const user = await Users.findOne({where: {email}})
            if(!user) {
                return res.status(404).json({message: 'Пользователь не зарегистрирован'})
            }
            const comparePassword = await bcrypt.compare(password, user.password)
            if(!comparePassword) {
                return res.status(400).json({message: 'Не верный пароль'})
            }
            const token = generedeJwt(user.id, user.email, user.role)
            return res.status(200).json({message: 'Пользователь авторизован',  user, token, role: user.role})
        } catch(e) {
            console.log(e)
            return res.status(500).json({message: 'Ошибка сервера'})
        }
    }

    async check (req, res) {
        const token = generedeJwt(req.user.id, req.user.email, req.user.role)
        const user = await Users.findOne({ where: { id: req.user.id } });
        return res.json({token, user})
    }
}

module.exports = new UserController;