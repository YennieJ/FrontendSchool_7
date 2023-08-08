// forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.

let arr = [10, 20, 30, 40, 50];
arr.forEach((value, index, array) => {
  console.log(value, index, array);
});

// 문제1. forEach를 사용해서 배열의 모든 요소를 더하는 코드를 작성하세요.
arr = [10, 20, 30, 40, 50];
let sum = 0;
arr.forEach((v) => {
  sum += v;
});
console.log(sum);

// 문제2. forEach를 사용해서 배열의 모든 요소를 더하는 코드를 작성하세요.
arr = [10, "20", 30, "40", 50];
sum = 0;
arr.forEach((v) => {
  sum += parseInt(v);
});
console.log(sum);

// 문제2. forEach를 사용해서 짝수 인덱스의 값을 모두 더하세요.
// 풀이1
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sum = 0;
arr.forEach((v, i) => {
  if (i % 2 === 0) {
    sum += v;
  }
});
console.log(sum);

// 풀이2
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sum = 0;
arr.forEach((v, i) => {
  i % 2 === 0 ? (sum += v) : null;
});
console.log(sum);

// Array(100).fill(0)와 같은 코드 대신 뒤에서 배울 map을 더 많이 사용합니다.
// 문제3. 1부터 100까지의 숫자를 다 더해주세요.
Array(100)
  .fill(0)
  .forEach((v, i) => {
    console.log(i + 1);
  });

sum = 0;
Array(100)
  .fill(0)
  .forEach((v, i) => {
    sum += i + 1;
  });

// 문제5. 1부터 100까지의 숫자 중 3의 배수만 더해주세요.
sum = 0;
Array(100)
  .fill(0)
  .forEach((v, i) => {
    i % 3 ? (num += i) : null;
  });

// 문제6. 아래와 같이 출력되게 해주세요.
// input = ['hojun', 'dongjun', 'dongwook', 'donggeun']
// output = ['hojun is good', 'dongjun is good', 'dongwook is good', 'donggeun is good']

function str(arr) {
  let output = [];
  arr.forEach((v) => output.push(`${v} is good`));
  return output;
}

// 문제7. 010-5044-2903번호가 있었을 때 아래와 같이 출력되게 해주세요. 뒤에 2자리를 x로 바꿔주세요.
// input = '010-5044-2903'
// output = '0xx-50xx-29xx'

let input = "010-5044-2903";
let output;

input.split("-").forEach((v) => v.replace(v.slice(-2), "xx"));

// 주의사항
// forEach는 return을 사용할 수 없습니다.
