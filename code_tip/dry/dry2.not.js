// ?
// 드라이 원칙에 어긋나지 않음
/*
  한 가지의 로직을 함수 안에서 처리
  다른 곳에서 중복적으로 발생 안해서 드라이라고 볼 수 없음
    
*/
function validateBody(body) {
    if (!body.id) {
        throw new Error("Validation falied. The attribute id is missing.");
    }

    if (!body.name) {
        throw new Error("Validation falied. The attribute name is missing.");
    }

    if (!body.count) {
        throw new Error("Validation falied. The attribute count is missing.");
    }
}

// 이렇게 쓸 수 있긴 한데
function validateBody2(body) {
    const attributes = ["id", "name", "count"];
    attributes.forEach((attribute) => {
        if (!body[attribute]) {
            throw new Error(
                `Validation falied. The attribute ${attribute} is missing.`
            );
        }
    });
}
