function sayHello() {
  return new Promise((resolve, reject) => {
    const hello = "hello hello";
    resolve(hello);
    // reject(new Error("에러 메세지"));
  });
}

// promise 문법
// sayHello()
//   .then((resolveData) => {
//     console.log(resolveData);
//     return resolveData;
//   })
//   .then((resolveData2) => {
//     console.log(resolveData2 + "2");
//     return resolveData2;
//   })
//   .then((resolveData) => {
//     console.log(resolveData);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async await

async function test() {
  const hello1 = await sayHello();
  const hello2 = (await hello1) + "2";
  const hello3 = await hello2; // 얘는 왜 안될까

  console.log(hello3);
}

test();
