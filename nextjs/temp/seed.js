"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_1 = require("./prisma");
function seed() {
    return __awaiter(this, void 0, void 0, function () {
        var users, owners, restaurantData, menuData, categoryData, productData, i, user, cart, i, owner, cart, restaurant, menu, j, category, k;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    users = {
                        name: ["Ana Alves", "Bruno Barros"],
                        email: ["ana@gmail.com", "bruno@gmail.com"],
                        image: ["", ""],
                    };
                    owners = {
                        name: ["Maria Rodrigues", "José da Silva"],
                        email: ["maria@gmail.com", "joao@gmail.com"],
                        image: ["", ""],
                    };
                    restaurantData = {
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
                    menuData = {
                        name: [
                            "Cardápio Principal - Aconchego Gastronômico",
                            "Cardápio Principal - Sabor do Vale",
                        ],
                    };
                    categoryData = {
                        name: [
                            ["Entradas", "Principais"],
                            ["Saladas", "Pratos Principais"],
                        ],
                    };
                    productData = {
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
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < 2)) return [3 /*break*/, 5];
                    return [4 /*yield*/, prisma_1.prisma.user.create({
                            data: {
                                name: users.name[i],
                                email: users.email[i],
                                image: users.image[i],
                                password: "123",
                            },
                        })];
                case 2:
                    user = _a.sent();
                    return [4 /*yield*/, prisma_1.prisma.cart.create({
                            data: {
                                userId: user.id,
                            },
                        })];
                case 3:
                    cart = _a.sent();
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 1];
                case 5:
                    i = 0;
                    _a.label = 6;
                case 6:
                    if (!(i < 2)) return [3 /*break*/, 18];
                    return [4 /*yield*/, prisma_1.prisma.user.create({
                            data: {
                                name: owners.name[i],
                                email: owners.email[i],
                                image: owners.image[i],
                                password: "123",
                                isOwner: true,
                            },
                        })];
                case 7:
                    owner = _a.sent();
                    return [4 /*yield*/, prisma_1.prisma.cart.create({
                            data: {
                                userId: owner.id,
                            },
                        })];
                case 8:
                    cart = _a.sent();
                    return [4 /*yield*/, prisma_1.prisma.restaurant.create({
                            data: {
                                name: restaurantData.name[i],
                                location: restaurantData.location[i],
                                schedule: restaurantData.schedule[i],
                                phone: restaurantData.phone[i],
                                description: restaurantData.description[i],
                                contacts: restaurantData.contacts[i],
                                ownerEmail: owner.email,
                            },
                        })];
                case 9:
                    restaurant = _a.sent();
                    return [4 /*yield*/, prisma_1.prisma.menu.create({
                            data: {
                                restaurantId: restaurant.id,
                                name: menuData.name[i],
                            },
                        })];
                case 10:
                    menu = _a.sent();
                    j = 0;
                    _a.label = 11;
                case 11:
                    if (!(j < 2)) return [3 /*break*/, 17];
                    return [4 /*yield*/, prisma_1.prisma.category.create({
                            data: {
                                menuId: menu.id,
                                name: categoryData.name[i][j],
                            },
                        })];
                case 12:
                    category = _a.sent();
                    k = 0;
                    _a.label = 13;
                case 13:
                    if (!(k < 4)) return [3 /*break*/, 16];
                    return [4 /*yield*/, prisma_1.prisma.product.create({
                            data: {
                                categoryId: category.id,
                                name: productData.name[i][j][k],
                                ingredients: productData.ingredients[i][j][k],
                                price: productData.price[i][j][k],
                                description: productData.description[i][j][k],
                                discount: productData.discount[i][j][k],
                                image: productData.image[i][j][k],
                            },
                        })];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15:
                    k++;
                    return [3 /*break*/, 13];
                case 16:
                    j++;
                    return [3 /*break*/, 11];
                case 17:
                    i++;
                    return [3 /*break*/, 6];
                case 18:
                    console.log("Seed completed successfully");
                    return [2 /*return*/];
            }
        });
    });
}
seed().catch(function (e) {
    console.error(e);
    process.exit(1);
});
