const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// filter
const even = arr.filter((v) => v % 2 === 0); //짝수만 찾기

// filter는 return 값이 true인 것만 모아서 새로운 배열을 만듭니다.
const 진실 = arr.filter((v) => {
  return true;
}); // [1, 2, 3, 4, 5, 6, 7, 8, 9];

const 거짓 = arr.filter((v) => {
  return false;
}); // []

const overFive = arr.filter((v) => {
  return v > 5;
}); // [6,7,8,9]

const odd = arr.filter((v) => {
  return v % 2 !== 0;
}); // 홀수만 찾기

// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
// reduce 보통 자료를 합칠 때 사용하는 듯?
[10, 20, 30, 40, 50].reduce((a, c) => a + c, 0); // 암기코드
[10, 20, 30, 40, 50].reduce((a, c) => a + c); // X
[].reduce((a, c) => a + c); // X
[10, 20, 30, 40, 50].reduce((a, c) => {
  console.log(a, c);
  return a + c;
});

// includes
const arr1 = ["hello", "world", "hojun"];
arr1.includes("world");

const arr2 = ["hello", "world", "hojun"];
arr1.includes("leehojun");

const arr3 = ["hello", "world", "hojun"];
arr1.includes("jun");

// join(***)
let arr11 = ["hello", "world", "hojun"];
arr.join("!");

let arr12 = ["hello", "world", "hojun"];
arr.join(" ");

let arr13 = ["010", "5044", "2903"];
arr.join("-");

let arr14 = ["안녕하세요.", "제 이름은 이호준입니다.", "저는 제주에 살아요."];
arr.join("\n");
console.log(arr.join("\n"));

let arr15 = ["안녕하세요.", "제 이름은 이호준입니다.", "저는 제주에 살아요."];
arr.join("<br>");
console.log(arr.join("<br>")); // innerHTML로 하면 <br>이 개행됩니다.
document.write(arr.join("<br>"));

// reverse
[10, 20, 30].reverse(); // [30, 20, 10]
