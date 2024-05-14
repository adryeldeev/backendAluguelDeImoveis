const {PrismaClient} = require('@prisma/client')
const { hash } = require('bcrypt');

const prisma = new PrismaClient()
module.exports= {
    async createUser(req, res){
        const {name, email, password } = req.body;
        try {
       let user = await prisma.user.findUnique({where:{email}})

       if(user){
           return res.json({
            error:true,
            message:'Usuário já existe'})
       }

       const HashPassword = await hash(password, 8)

        user = await prisma.user.create({
            data:{
                name,
                email,
                password:HashPassword
            }
        })
        return res.json({
            error:false,
            message:'Sucesso: Usuário cadastrado com sucesso!',
            user
        })
        } catch (error) {

            return res.json({message: error.message})
        }
    },


    async findAllUser(req, res){
try {
    const user = await prisma.user.findMany()
    return res.json(user)
} catch (error) {
    return res.json({message: error.message})
}
    },

    async findUser(request, response) {
        try {
          const { userId } = request.params;
    
          const user = await prisma.user.findUnique({
            where: { id : Number(userId) }
          });
          delete user.password;
          return response.json(user);
    
        } catch (error) {
          return response.json({ message: error.message })
        }
      }
}