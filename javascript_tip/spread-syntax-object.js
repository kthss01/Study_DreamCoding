// Spread Syntax - Object
const item = { type: "close", size: "M" };
const detail = { price: 20, made: "Korea", gender: "M" };

// Bad Code
item["price"] = detail.price; // 수동적으로 넣을 수 있지만 위험함

// Bad Code
const newObject = new Object();
newObject["type"] = item.type;
newObject["size"] = item.size;
newObject["price"] = detail.price;
newObject["made"] = detail.made;
newObject["gender"] = detail.gender;

// Bad Code
const newObject2 = {
    type: item.type,
    size: item.size,
    price: detail.price,
    made: detail.made,
    gender: detail.gender,
};

// Good Code
const shirt0 = Object.assign(item, detail);

// Better Code
// price만 40으로 바뀜
const shirt = { ...item, ...detail, price: 40 };
