var str = `
Hi there, Nice to meet you. And Hello there and hi.
I love grey(gray) color not a gry, graay and graaay.
Ya ya YaYaYa Ya

abcdefghijklmnopqrstuvwxyz
ABSCEFGHIJKLMNOPQRSTUVWZYZ
1234567890

.[]{}()\^$|?*+

010-898-0893
010 898 0893
010.898.0893
010-405-3412
02-878-8888

dream.coder.ellie@gmail.com
hello@daum.net
hello@daum.co.kr

https://www.youtu.be/-ZClicWm0zM
http://www.youtu.be/-ZClicWm0zM
https://youtu.be/-ZClicWm0zM
youtu.be/-ZClicWm0zM
`;

/**
 * ("문자열").match(/정규표현식/플래그)
 *  문자열에서 정규표현식에 매칭되는 항목들을 배열로 반환
 *
 * ("문자열").replace(/정규표현식/, "대체문자열")
 *  정규표현식에 매칭되는 항목을 대체문자열로 변환
 *
 * ("문자열").split(정규표현식)
 *  문자열을 정규표현식에 매칭되는 항목으로 쪼개어 배열로 반환
 *
 * (정규표현식).test("문자열")
 *  문자열이 정규표현식와 매칭되면 true, 아니면 false 반환
 *
 * (정규표현식).exec("문자열")
 *  match 매서드와 유사 (단, 무조건 첫번째 매칭 결과만 반환)
 */

let reg;
///////// 전화번호 찾기
// 내가 푼거
reg = /^0\d{1,2}[-.,\s]?\d{3,4}[-.,\s]?\d{3,4}/gm;

// 풀이
reg = /\d\d\d-\d\d\d-\d\d\d\d/gm; // [ '010-898-0893', '010-405-3412' ]
reg = /\d{2,3}[- .]\d{3}[- .]\d{4}/gm;
/*
[
  '010-898-0893',
  '010 898 0893',
  '010.898.0893',
  '010-405-3412',
  '02-878-8888'
]
*/
//console.log(str.match(reg));

///////// 이메일 찾기
// 내가 푼거
reg = /\w+@\w+.\w+(.\w+)?/gm;

// 풀이
reg = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+/gm;

//console.log(str.match(reg));

///////// 유튜브 주소에서 아이디만 가져오기
// 내가 푼거
//reg = /(https\:\/\/)+/gm; // 못품..

// 풀이
reg = /(?:https?:\/\/)?(www\.)?youtu.be\/([a-zA-Z0-9-]{11})/gm;
let reg2 = /(?:https?:\/\/)?(www\.)?youtu.be\/([a-zA-Z0-9-]{11})/m;

//console.log(str.match(reg)); // 플래그 g 쓰면 배열 나옴
// console.log(reg.exec(str));
//console.log(str.match(reg2));

const url = "https://www.youtu.be/-ZClicWm0zM";
reg2 = /(?:https?:\/\/)?(?:www\.)?youtu.be\/([a-zA-Z0-9-]{11})/;
//console.log(reg.exec(url));
const result = url.match(reg2);
console.log(result[1]);
