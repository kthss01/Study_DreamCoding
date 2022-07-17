// async & aswait
// clear style of using promise

// 1. async
async function fetchUser() {
    // do network request in 10 secs...

    // return "ellie";

    // return new Promise((resolve, reject) => {
    //     // do network request in 10 secs...

    //     // return "ellie"; // 이렇게하면 promise 상태 pending 이됨
    //     resolve("ellie");
    // });

    return "ellie";
}

// promise pending fullfiled rejected 이 중 하나가 됨

const user = fetchUser(); // promise 리턴
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    // throw 'error';
    return "apple";
}

async function getBanana() {
    await delay(1000);
    return "banana";
}

// function getBanana() {
//     return delay(3000).then(() => "banana");
// }

// function pickFruits() {
//     return getApple().then((apple) => {
//         return getBanana().then((banana) => `${apple} + ${banana}`);
//     });
// }

// pickFruits().then(console.log);

async function pickFruits() {
    // try {
    // } catch() {
    // }

    // 병렬 수행 가능
    const applePromise = getApple();
    const bananaPromise = getBanana();

    // const apple = await getApple();
    // const banana = await getBanana();

    const apple = await applePromise;
    const banana = await bananaPromise;

    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 3. useful Promise APIs
// function pickAllFruits() {
//     return Promise.all([getApple(), getBanana()]).then((fruits) =>
//         fruits.join(" + ")
//     );
// }

async function pickAllFruits() {
    const fruits = await Promise.all([getApple(), getBanana()]);
    return fruits.join(" + ");
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
