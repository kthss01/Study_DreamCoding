// Nullish coalescing operator
/**
 * Nullish coalescing operator
 * leftExpr ?? rightExpr
 *  null, undefined
 *  Expressiong임
 *
 * Logical OR operator
 * leftExpr || rightExpr
 *  falsy
 *      false, undefined, null, 0, NaN, -0, '' `` ""
 */

// Bad Code
function printMessage(text) {
    let message = text;
    if (text == null || text == undefined) {
        message = "Nothing to display";
    }
    console.log(message);
}

// Good Code
function printMessage2(text) {
    const message = text ?? "Nothing to display";
    console.log(message);
}

// 이 경우 null null 출력됨
// undefined인 경우엔 default parameter 사용
function printMessage3(text = "Nothing to display") {
    console.log(text);
}

printMessage2("Hello");
printMessage2(undefined);
printMessage2(null);

function getInitialState() {
    return null;
}

function fetchFromServer() {
    return "Hiya from ";
}

const result = getInitialState() ?? fetchFromServer();
console.log(result);
