import { prisma } from "./prisma";

async function seed() {
  const restaurantNames = ["Açaiteria da dona Dinda", "Pizzaria do zé carioca"];
  const menuNames = ["Açais", "Pizzas"];
  const categoryNames = [
    ["Opções", "Complementos"],
    ["Pizzas", "Bebidas"],
  ];
  const productNames = [
    [
      ["Açai 100ml", "Açai 250ml", "Açai 500ml", "Açai 750ml"],
      ["Leite condensado", "Paçoca", "Leite ninho", "Granola"],
    ],
    [
      [
        "Pizza Calabresa",
        "Pizza Quatro queijos",
        "Pizza Portuguesa",
        "Pizza Frango com catupiry",
      ],
      ["Coca-cola", "Suco Vale", "Água Mineral", "Guaraná"],
    ],
  ];
  const owners = ["Willyan", "João"];
  const ownersEmail = [
    "willyanmarquesmelo@gmail.com",
    "joaogamer123@gmail.com",
  ];
  const users = ["Kleber", "Paulão"];
  const usersEmail = ["willyanmarquesmelo@gmail.com", "joaogamer123@gmail.com"];

  for (let i = 0; i < 2; i++) {
    const owner = await prisma.owner.create({
      data: {
        name: owners[i],
        email: ownersEmail[i],
        password: "123456",
      },
    });

    const user = await prisma.user.create({
      data: {
        name: users[i],
        email: usersEmail[i],
        password: "123456",
      },
    });

    const cart = await prisma.cart.create({
      data: {
        userId: user.id,
      },
    });

    const restaurant = await prisma.restaurant.create({
      data: {
        name: restaurantNames[i],
        location: `Location ${i + 1}`,
        schedule: `Schedule ${i + 1}`,
        phone: `${i + 61912345678}`,
        description: `Description ${i + 1}`,
        contacts: `Contacts ${i + 1}`,
        ownerEmail: owner.email,
      },
    });

    const menu = await prisma.menu.create({
      data: {
        restaurantId: restaurant.id,
        name: menuNames[i],
      },
    });

    for (let j = 0; j < 2; j++) {
      const category = await prisma.category.create({
        data: {
          menuId: menu.id,
          name: categoryNames[i][j],
        },
      });

      for (let k = 0; k < 4; k++) {
        await prisma.product.create({
          data: {
            categoryId: category.id,
            name: productNames[i][j][k],
            ingredients: `Ingredients ${k + 1}`,
            price: k + 10,
            description: `Description ${k + 1}"`,
            discount: 0,
            image: "",
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
