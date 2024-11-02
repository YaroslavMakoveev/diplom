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
        const img = req.file || req.file.filename;
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
            return res.status(200).json({message: 'Пользователь зарегистрирован'})
        } catch(e) {
            console.log(e)
            return res.status(500).json({message: 'Ошибка сервера'})
        }
    }
    
    async login (req, res) {
        
    }

    async check (req, res) {
        
    }
}

module.exports = new UserController;
