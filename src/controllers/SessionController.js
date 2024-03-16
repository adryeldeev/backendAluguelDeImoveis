import {PrismaClient } from '@prisma/client'
import { compare, hash } from 'bcrypt';
import jwt from 'jsonwebtoken'
const prisma = new PrismaClient()
export default{
    async createSeassion(req,res){
        try {
            const {email, password} = req.body;
            const user = await prisma.user.findUnique({where: {email}})
            if(!user){
                return res.json({message: 'Usuário ou senha incorretos'})
            }
            const checkPassword = await compare(password, user.password)
            if(!checkPassword){
                return res.json({message: 'Usuário ou senha incorretos'})
            }

            const token = jwt.sign({id:user.id}, "698dc19d489c4e4db73e28a713eab07b", {
                expiresIn:'1d'
            })
           
            delete user.password

            return res.json({user, token})

        } catch (error) {
            return res.json({message: error.message});
        }
    }
}