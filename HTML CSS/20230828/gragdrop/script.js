// 드래그 박스
const dropTarget = document.querySelector(".drop-target");

// 드래그 아이템
const dragItems = document.querySelectorAll(".drag-item");

// 드래그 가능한 아이템에게
dragItems.forEach((item) => {
  // 드래그 시작을 알려줌.
  item.addEventListener("dragstart", () => {
    // 드래그 한 뒤에 뒷 배경이 변했으면 해서
    setTimeout(() => {
      item.classList.add("dragging");
    }, 0);
  });

  // 드래그 끝남을 알려줌
  item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

// 어떤 아이템이 드래그 되고 있나 확인해서
// insertBefore 사용하는 FN
function handleDragOver(e) {
  e.preventDefault();
  // 드래그 가능 박스안에 드래그 중인 아이템
  const draggingItem = dropTarget.querySelector(".dragging");
  // not(.dragging)
  const notDraggingItems = Array.from(
    dropTarget.querySelectorAll(".drag-item:not(.dragging)")
  );

  // standard 위치 값
  const nextItem = notDraggingItems.find((item) => {
    /* 
      clientY : 뷰포트 내 마우스 y좌표
      offsetTop: 뷰포트에서 요소까지의 y좌표
      offsetHeight: 요소의 높이(border 포함)
    */
    // console.log(
    //   "clientY: ",
    //   e.clientY,
    //   "/ offsetTop: ",
    //   item.offsetTop,
    //   "/ offsetHeight",
    //   item.offsetHeight
    // );
    return e.clientY <= item.offsetTop + item.offsetHeight / 2;
  });

  // 드래그가능한 박스에 insertBefore(insertNode,standardNode)
  // 박스 to 박스 하고 싶으면 여길 변경해야돼
  dropTarget.insertBefore(draggingItem, nextItem);
}

// 드래그 중 dragover
dropTarget.addEventListener("dragover", handleDragOver);
// 마우스가 대상 객체 위로 처음 들어갈때 dragenter
dropTarget.addEventListener("dragenter", (e) => e.preventDefault());

// 단계
// dragstart -> dragenter -> dragover(handleDragOver) -> dragend
