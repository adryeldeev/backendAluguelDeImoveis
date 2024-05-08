const { PrismaClient } = require('../prisma/prisma/node_modules/.prisma/client');

const prisma = new PrismaClient({
  datasources: {
    db: { url: 'mysql://root:RuXnKeyytJqWvgyJCPOFsWqcShahoHyZ@viaduct.proxy.rlwy.net:25760/railway' }
  }
});


module.exports = prisma;