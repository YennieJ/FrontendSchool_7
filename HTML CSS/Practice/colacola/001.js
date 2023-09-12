class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector(".cola-list");
  }

  async setup() {
    const colaList = await this.loadItem();
    this.colaFactory(colaList);
  }

  async loadItem() {
    try {
      const response = await fetch("./001.json");
      if (!response.ok) {
        throw new Error(`HTTP ERROR : ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.log("콜라데이터 오류");
    }
  }

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

  // loadItem() {
  //   return fetch("./001.json")
  //     .then((respnse) => respnse.json())
  //     .then((data) => data.colaList);
  // }
}

const temp = new ColaGenerator();
// temp.loadItem().then((data) => console.log(data));

temp.setup();
