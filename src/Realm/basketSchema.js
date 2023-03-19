export const basketSchema = {
    name: "Basket",
    primaryKey: "_id",
    properties: {
        _id: "uuid",
        id: "string",
        brand: "string",
        createdAt: "string",
        description: "string",
        image: "string",
        model: "string",
        name: "string",
        price: "string",
        quantity: "int"
    },
};