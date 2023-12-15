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
        var restaurantNames, menuNames, categoryNames, productNames, owners, ownersEmail, users, usersEmail, images, i, user, cart, i, owner, cart, restaurant, menu, j, category, k;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    restaurantNames = ["Açaiteria da dona Dinda", "Pizzaria do zé carioca"];
                    menuNames = ["Açais", "Pizzas"];
                    categoryNames = [
                        ["Opções", "Complementos"],
                        ["Pizzas", "Bebidas"],
                    ];
                    productNames = [
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
                    owners = ["Teste", "João"];
                    ownersEmail = [
                        "teste@teste.com",
                        "joaogamer123@gmail.com",
                    ];
                    users = ["Kleber", "Paulão"];
                    usersEmail = ["klebinho@gmail.com", "paulo.tejanno@gmail.com"];
                    images = {
                        users: [
                            "https://i.redd.it/qm2eo6qvlot51.jpg",
                            "https://external-preview.redd.it/TUdNAPOM04o9vbH77kRDRqn9WjpCSn27eNTbhikJcZM.jpg?auto=webp&s=c3c105ad95ed3af4a8931585d00cc18c837f9072",
                        ],
                        owners: [
                            "https://citizensketcher.files.wordpress.com/2022/05/thispersondoesnotexist_43-1.jpg",
                            "https://i.seadn.io/gae/7KTZ107oTbcCCWSs8M76vYd1b7gwth5AdHn6KR1HlfTxF0jgZugiVx6CdmYNw4OBtFJDNgQEizIkHzD5TUVmux0ppHGA-Ei5eG8k8Q?auto=format&dpr=1&w=1000",
                        ],
                    };
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < 2)) return [3 /*break*/, 5];
                    return [4 /*yield*/, prisma_1.prisma.user.create({
                            data: {
                                name: users[i],
                                email: usersEmail[i],
                                image: images.users[i],
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
                                name: owners[i],
                                email: ownersEmail[i],
                                image: images.owners[i],
                                password: "123456",
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
                                name: restaurantNames[i],
                                location: "Location ".concat(i + 1),
                                schedule: "Schedule ".concat(i + 1),
                                phone: "".concat(i + 61912345678),
                                description: "Description ".concat(i + 1),
                                contacts: "Contacts ".concat(i + 1),
                                ownerEmail: owner.email,
                            },
                        })];
                case 9:
                    restaurant = _a.sent();
                    return [4 /*yield*/, prisma_1.prisma.menu.create({
                            data: {
                                restaurantId: restaurant.id,
                                name: menuNames[i],
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
                                name: categoryNames[i][j],
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
                                name: productNames[i][j][k],
                                ingredients: "Ingredients ".concat(k + 1),
                                price: k + 10,
                                description: "Description ".concat(k + 1, "\""),
                                discount: 0,
                                image: "",
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
