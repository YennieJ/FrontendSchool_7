// sort(): 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다.

// 애러가 발생하지 않는 코드
// data.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))

let data = ["a", "z", "b", "e"];
data.sort();

// 사전식 정렬이어서 아래와 같은 값은 정렬이 되지 않습니다!
data = [1, 11, 2, 111, 22];
data.sort();

// 지금 이해하시라고 드리는 코드는 아니고 실무 DB로 가지고 있으시라고 드리는 코드입니다!
// data.sort((a, b) => (a > b ? -1 : (a < b ? 1 : 0)))
// data.sort((a, b) => (a < b ? -1 : (a > b ? 1 : 0)))

// 여러분들이 자주 사용하는 코드
data = [1, 11, 2, 111, 22];
data.sort((a, b) => a - b); // 오름차순
data.sort((a, b) => b - a); // 내림차순

// (a, b) => (a - b)가 콜백함수입니다.
// a - b 값이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
// a - b 값이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬합니다.
// a - b 값이 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트합니다. 즉, b가 먼저옵니다.

// 원리
let test = [13, 9, 10, 2];
test.sort((a, b) => {
  console.log(a, b);
});
// 출력해보면 a, b의 값이 순차적으로 들어갈 것 같지만 그렇지 않습니다.
// 9 13
// 10 9
// 2 10

test = [13, 9, 10, 2];
test.sort((a, b) => {
  console.log(a, b);
  console.log(a - b); // 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
});

test = [13, 9, 10, 2];
test.sort((a, b) => {
  return a - b; // 작은 값이 앞으로 간다 => 오름차순
});

test = [13, 9, 10, 2];
test.sort((a, b) => {
  console.log(a, b);
  return a - b;
});

// 브라우저 환경에따라 적용되는 정렬 알고리즘이 다르다...
////////////////뽀인뚜////////////////////////
// (a, b) => (a - b)가 콜백함수입니다.
// a - b 값이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
// a - b 값이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬합니다.
// a - b 값이 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트합니다. 즉, b가 먼저옵니다.

// a-b == 오름차순 :) 걍 외우자
/////////////////////////////////////////////
// 버블 정렬
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([13, 9, 10, 2]);

// 선택 정렬
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([13, 9, 10, 2]);

// 삽입 정렬
function insertionSort(arr) {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([13, 9, 10, 2]);

// 병합 정렬
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
merge([100, 200], [1, 2, 3, 5, 6]);

// 퀵 정렬
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([13, 9, 10, 2]);
