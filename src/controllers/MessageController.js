const { PrismaClient } = require('@prisma/client');
const prisma  = new PrismaClient()



export default {
    async createMessage(req,res){
        const {client_name, client_email, client_mensagem, userId} = req.body;

        try {
            let message = await prisma.messagens.findFirst({where:{client_email}})
            if(message){
                return res.json({
                    error:true,
                    message:"Ooppss: sua mensagem já foi cadastrada, aguarde resposta do anunciante!"
                });
            }

            message = await prisma.messagens.create({
                data:{
                    client_name,
                    client_email,
                    client_mensagem,
                    userId
                }
            })
            return res.json({
                error:false,
                message:"Sucesso: Mensagem cadastrada com sucesso!",
                message
            })
        } catch (error) {
            return res.json({message:error.message})
        }
    },

 async findMessage(req,res){
    try{
    const {id} = req.params;
    const messagem = await prisma.messagens.findMany({
    where: {userId: Number(id)}
})

    return res.json({messagem})
        }catch(error){
            return response.json({message:error.message})
        }
    }
}