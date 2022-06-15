// Template Literals (Template String)
const person = {
    name: "Julia",
    score: 4,
};

// Bad Code
console.log(
    "Hello " + person.name + ". Your current score is: " + person.score
);

// Good Code
console.log(`Hello ${person.name}, Your current score is: ${person.score}`);

// Good Code2
const { name, score } = person;
console.log(`Hello ${name}, Your current score is: ${score}`);

// Good Code3
// 재사용 가능하도록 함수화
function greetings(person) {
    const { name, score } = person;
    console.log(`Hello ${name}, Your current score is: ${score}`);
}
