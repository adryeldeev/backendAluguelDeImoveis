import { PrismaClient } from "../../prisma/prisma/node_modules/.prisma/client";
const prisma = new PrismaClient();

export default {
  async createMessage(request, response) {
    const { client_name, client_email, client_mensagem, userId } = request.body;
    
    try {  
      let messagem = await prisma.messagens.findFirst({ where: { client_email } });
      
      if (messagem) {
        return response.json({ 
          error: true,
          message: "Oppss: sua mensagem já foi cadastrada, aguarde resposta do anunciante!" 
        });
      }

      messagem = await prisma.messagens.create({
        data: {
          client_name,
          client_email,
          client_mensagem,
          userId
        }
      });

      return response.json({
        error: false,
        message: "Sucesso: Mensagem cadastrada com sucesso!",
        messagem
      });

    } catch (error) {
      return response.json({ message: error.message })
    }
  },
  async findMessage(request, response) {
    try {
      const { id } = request.params;

      const messagem = await prisma.messagens.findMany({
        where: { userId : Number(id) }
      });

      return response.json({
        messagem
      });

    } catch (error) {
      return response.json({ message: error.message })
    }
  }
};