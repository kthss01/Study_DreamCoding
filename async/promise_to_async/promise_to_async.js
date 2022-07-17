class UserStorage {
    // 이 방법 error 잡는데 문제가 있어보임
    // delay(ms) {
    //     return new Promise((resolve) => setTimeout(resolve, ms));
    // }

    // async loginUser(id, password) {
    //     await this.delay(2000);
    //     if (
    //         (id === "ellie" && password === "dream") ||
    //         (id === "coder" && password === "academy")
    //     ) {
    //         return id;
    //     } else {
    //         return new Error("not found");
    //     }
    // }

    // async getRoles(user) {
    //     await this.delay(1000);
    //     if (user === "ellie") {
    //         return { name: "ellie", role: "admin" };
    //     } else {
    //         return new Error("no access");
    //     }
    // }

    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === "ellie" && password === "dream") ||
                    (id === "coder" && password === "academy")
                ) {
                    resolve(id);
                } else {
                    reject(new Error("not found"));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === "ellie") {
                    resolve({ name: "ellie", role: "admin" });
                } else {
                    reject(new Error("no access"));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

// 이 방법 error 잡는데 문제가 있어보임
// async function findUserRole(id, password) {
//     try {
//         const user = await userStorage.loginUser(id, password);
//         const userInfo = await userStorage.getRoles(user);
//         alert(`Hello ${userInfo.name}, you have a ${userInfo.role} role`);
//     } catch (error) {
//         console.log(error);
//     }
// }

// findUserRole(id, password);

async function checkUser() {
    try {
        const userId = await userStorage.loginUser(id, password);
        const user = await userStorage.getRoles(userId);
        alert(`Hello ${user.name}, you have a ${user.role}`);
    } catch (error) {
        console.log(error);
    }
}

checkUser();
