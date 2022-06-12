// good
function greetings(user) {
    return `Hi ${user.fullName()}`;
}

function goodbye(user) {
    return `See you next time ${user.fullName()}`;
}

class User {
    // e.g. John Jackson
    fullName() {
        // 여기 한군데에서만 수정
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
        // return `${this.firstName} ${this.lastName}`;
    }
}
