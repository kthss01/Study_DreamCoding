const dog = {
    type: "dog",
    name: "츄츄",
    owner: {
        name: "kth",
    },
};

console.log("loging", dog);

// log level
// 노드로는 색깔 차이 없는데
// 브라우저에서 동일하게 출력하면 심각성에 따라 다른 색으로 표현됨
console.log("log"); // 개발 - 출력
console.info("info"); // 정보 - 어떠한 특정한 정보를 출력할 때 사용
// 여기까진 배포시 빼버리는게 좋음
console.warn("warn"); // 경보 - 심각한 건 아니고 신경써야 하는 거
console.error("error"); // 에러! 예상하지 못한 에러, 시스템 에러

// assert
// 특정한 조건이 만족될 때 출력
console.assert(2 === 3, "not same!"); // 이 경우 출력
// Assertion failed: not same!
console.assert(2 === 2, "same!");

// print object
console.log(dog);
console.table(dog);
console.dir(dog); // log와 지금은 같지만 옵션을 줄 수 있음
console.dir(dog, { colors: false, depth: 0 });
// 0 인 경우 owner는 더 자세히 표현 x

// measuring time
console.time("for loop"); // 이름 지정
for (let i = 0; i < 10000; i++) {
    //
}
console.timeEnd("for loop"); // 지정한 이름 입력, 걸린시간 함께 출력

// counting : 특정한 함수가 몇 번 노출 되었는지 알고 싶을 때
// 일반적인 방법
let count = 0;
function a() {
    count++;
}
a();
a();
a();
console.log(`a 함수는 ${count}번 실행됨`);

function b() {
    console.count("b function"); // 호출될때마다 확인 가능
}
b();
b();
console.countReset("b function"); // 초기화
b();
b();

// trace
const f1 = () => f2();
const f2 = () => f3();
const f3 = () => {
    console.trace();
    console.log("hi! :)");
};
f1();
