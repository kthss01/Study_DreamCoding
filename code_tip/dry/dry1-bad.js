// bad
// 사용자 이름
function greetings(user) {
    // 이 경우 다른 곳도 다바꿔야함
    return `Hi ${user.firstName} ${user.middleName} ${user.lastName}`;
    // return `Hi ${user.firstName} ${user.lastName}`;
}

function goodbye(user) {
    return `See you next time ${user.firstName} ${user.lastName}`;
}
