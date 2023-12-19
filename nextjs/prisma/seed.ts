import { prisma } from "./prisma";

async function seed() {
  const users = {
    name: ["Ana Alves", "Bruno Barros"],
    email: ["ana@gmail.com", "bruno@gmail.com"],
    image: ["", ""],
  };

  const owners = {
    name: ["Maria Rodrigues", "José da Silva"],
    email: ["maria@gmail.com", "joao@gmail.com"],
    image: ["", ""],
  };

  const restaurantData = {
    name: ["Aconchego Gastronômico", "Sabor do Vale"],
    location: [
      "Rua Principal, 123, Cidade Feliz",
      "Av. das Flores, 789, Vale Encantado",
    ],
    schedule: [
      "Seg-Sáb: 11h-22h, Dom: 12h-20h",
      "Ter-Sex: 12h-21h, Sáb-Dom: 11h30-22h30",
    ],
    phone: ["11 1234-5678", "12 9876-5432"],
    description: [
      "Aconchego Gastronômico oferece uma culinária variada com pratos típicos da região, priorizando ingredientes locais.",
      "Sabor do Vale serve pratos caseiros com sabores tradicionais da culinária regional, feitos com ingredientes frescos.",
    ],
    contacts: [
      "contato@aconchegogastronomico.com.br, (11) 1234-5678",
      "contato@sabordovale.com.br, (12) 9876-5432",
    ],
  };

  const menuData = {
    name: [
      "Cardápio Principal - Aconchego Gastronômico",
      "Cardápio Principal - Sabor do Vale",
    ],
  };

  const categoryData = {
    name: [
      ["Entradas", "Principais"],
      ["Saladas", "Pratos Principais"],
    ],
  };

  const productData = {
    name: [
      [
        [
          "Bruschetta de Tomate",
          "Carpaccio de Abobrinha",
          "Camarão Grelhado",
          "Cogumelos Recheados",
        ],
        [
          "Risoto de Frutos do Mar",
          "Filé à Parmegiana",
          "Salmão ao Molho de Maracujá",
          "Tiramisù",
        ],
      ],
      [
        [
          "Salada Caprese",
          "Salada de Quinoa",
          "Frango Grelhado com Legumes",
          "Espaguete ao Pesto",
        ],
        [
          "Bife à Milanesa",
          "Lasanha de Berinjela",
          "Risoto de Aspargos",
          "Pudim de Leite",
        ],
      ],
    ],
    ingredients: [
      [
        [
          "Tomate, manjericão, pão italiano",
          "Abobrinha, queijo parmesão, azeite",
          "Camarão, alho, limão",
          "Cogumelos, queijo cremoso, ervas",
        ],
        [
          "Arroz arbóreo, frutos do mar, tomate",
          "Filé, queijo, molho de tomate",
          "Salmão, maracujá, batata",
          "Biscoitos, café, queijo mascarpone",
        ],
      ],
      [
        [
          "Mozzarella, tomate, manjericão",
          "Quinoa, tomate, pepino",
          "Frango, abobrinha, pimentão",
          "Macarrão, manjericão, nozes",
        ],
        [
          "Carne, queijo, molho de tomate",
          "Berinjela, queijo, molho branco",
          "Arroz, aspargos, parmesão",
          "Leite, açúcar, baunilha",
        ],
      ],
    ],
    price: [
      [
        [12.99, 9.5, 18.75, 10.25],
        [22.5, 19.99, 24.75, 8.99],
      ],
      [
        [8.75, 10.25, 15.99, 11.5],
        [18.25, 13.99, 16.5, 6.99],
      ],
    ],
    description: [
      [
        [
          "Deliciosa bruschetta de tomate fresco sobre pão crocante",
          "Finas fatias de abobrinha temperadas",
          "Camarão grelhado com toque de limão",
          "Cogumelos recheados com queijo cremoso",
        ],
        [
          "Risoto de frutos do mar com toque de tomate",
          "Filé à parmegiana com molho de queijo",
          "Salmão ao molho de maracujá com batatas",
          "Clássico tiramisù italiano",
        ],
      ],
      [
        [
          "Salada caprese tradicional",
          "Salada de quinoa com vegetais frescos",
          "Frango grelhado com legumes coloridos",
          "Espaguete ao pesto de manjericão",
        ],
        [
          "Bife à milanesa com molho de tomate",
          "Lasanha de berinjela com queijo",
          "Risoto de aspargos e queijo parmesão",
          "Pudim de leite cremoso",
        ],
      ],
    ],
    discount: [
      [
        [0, 0, 0, 0],
        [0, 0, 5, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
    ],
    image: [
      [
        ["bruschetta.jpg", "carpaccio.jpg", "camarao.jpg", "cogumelos.jpg"],
        ["risoto.jpg", "file.jpg", "salmao.jpg", "tiramisu.jpg"],
      ],
      [
        ["caprese.jpg", "quinoa.jpg", "frango.jpg", "espaguete.jpg"],
        ["bife.jpg", "lasanha.jpg", "risoto_aspargos.jpg", "pudim.jpg"],
      ],
    ],
  };

  //----------------------------------------------------------------------------//
  // Seed de usuários comuns
  for (let i = 0; i < 2; i++) {
    const user = await prisma.user.create({
      data: {
        name: users.name[i],
        email: users.email[i],
        image: users.image[i],
        password: "123",
      },
    });

    const cart = await prisma.cart.create({
      data: {
        userId: user.id,
      },
    });
  }

  //----------------------------------------------------------------------------//
  // Seed de donos e seus restaurantes
  for (let i = 0; i < 2; i++) {
    const owner = await prisma.user.create({
      data: {
        name: owners.name[i],
        email: owners.email[i],
        image: owners.image[i],
        password: "123",
        isOwner: true,
      },
    });

    const cart = await prisma.cart.create({
      data: {
        userId: owner.id,
      },
    });

    const restaurant = await prisma.restaurant.create({
      data: {
        name: restaurantData.name[i],
        location: restaurantData.location[i],
        schedule: restaurantData.schedule[i],
        phone: restaurantData.phone[i],
        description: restaurantData.description[i],
        contacts: restaurantData.contacts[i],
        ownerEmail: owner.email,
      },
    });

    const menu = await prisma.menu.create({
      data: {
        restaurantId: restaurant.id,
        name: menuData.name[i],
      },
    });

    for (let j = 0; j < 2; j++) {
      const category = await prisma.category.create({
        data: {
          menuId: menu.id,
          name: categoryData.name[i][j],
        },
      });

      for (let k = 0; k < 4; k++) {
        await prisma.product.create({
          data: {
            categoryId: category.id,
            name: productData.name[i][j][k],
            ingredients: productData.ingredients[i][j][k],
            price: productData.price[i][j][k],
            description: productData.description[i][j][k],
            discount: productData.discount[i][j][k],
            image: productData.image[i][j][k],
          },
        });
      }
    }
  }

  console.log("Seed completed successfully");
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
