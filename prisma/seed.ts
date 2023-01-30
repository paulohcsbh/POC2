import prisma from "../src/database/db.js";

async function main(){
  await prisma.category.createMany({
    data: [{
      "name": "Camisa"
    },
    {
      "name": "Calça"
    },
    {
      "name": "Vestido"
    }]
  });
  await prisma.size.createMany({
    data: [{
      "name": "P"
    },
    {
      "name": "M"
    },
    {
      "name": "G"
    }]
  });
  await prisma.state.createMany({
    data: [{
      "name": "Criada"
    },
    {
      "name": "Paga"
    },
    {
      "name": "Cancelada"
    }]
  })
  
    await prisma.clients.createMany({
        data: [{
            "name": "Paulo Cardoso",
            "cpf": "09412345627",
            "email": "paulohcs@gmail.com"
        },
        {
            "name": "Bruce Dog",
            "cpf": "00011122234",
            "email": "bruce@dog.com"
        }]        
    });  
    await prisma.products.createMany({
      data: [{
        "name": "Calça jeans",
        "price": 301,
        "picture": "Foto bonita da calça",
        "categoryId": 2,
        "sizeId": 1
      },
      {
        "name": "Camisa de marca",
        "price": 659,
        "picture": "Foto bonita da camisa",
        "categoryId": 1,
        "sizeId": 2
      }
          ]
    });
    await prisma.purchases.createMany({
      data: [{
        "clientId": 1,
        "productId": 2,
        "stateId": 2
      },
      {
        "clientId": 2,
        "productId": 1,
        "stateId": 1
      }
            ]
    });
    
}
main()
.then(() => {
    console.log("Registro feito com sucesso")
})
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });