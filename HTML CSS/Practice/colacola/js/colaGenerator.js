class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector(".cola-list");
  }

  // 동작 기능
  async setup() {
    const colaList = await this.loadItem();
    this.colaFactory(colaList);
  }

  // 데이터 받아오기
  async loadItem() {
    // loadItem() {
    //   return fetch("./001.json")
    //     .then((respnse) => respnse.json())
    //     .then((data) => data.colaList);
    // }
    try {
      const response = await fetch("./colaItems.json");
      if (!response.ok) {
        throw new Error(`HTTP ERROR : ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.log("콜라데이터 오류");
    }
  }

  // 아이템 정의하기
  colaFactory(colaList) {
    const docFrag = new DocumentFragment();
    colaList.forEach((el) => {
      const item = document.createElement("li");
      const itemTemplate = `
      <button type="button" class="btn-cola on">
      <img src="./imgs/${el.img}" alt=${el.name} />
      <span class="cola-name">${el.name}</span>
      <strong class="cola-price">${el.cost}원</strong>
    </button>
      `;
      item.innerHTML = itemTemplate;
      docFrag.appendChild(item);
    });
    this.itemList.append(docFrag);
  }
}

// const temp = new ColaGenerator();
// temp.loadItem().then((data) => console.log(data));

export default ColaGenerator;
