class ColaMachineFunc {
  constructor() {
    // menu
    const cMachine = document.querySelector(".menu");

    this.colaList = cMachine.querySelector(".cola-list");

    this.balance = cMachine.querySelector(".money-area dd");
    this.btnInput = cMachine.querySelector("#input-number+.btn-money-area");
    this.inputCost = cMachine.querySelector("#input-number");
    this.btnReturn = cMachine.querySelector(".money-area+.btn-money-area");

    this.getList = cMachine.querySelector(".get-list");
    this.getButton = cMachine.querySelector(".btn-get");

    // 소지금
    const myInfo = document.querySelector(".mine");
    this.myMoney = myInfo.querySelector(".money-area dd");

    //get
    const get = document.querySelector(".get");
    this.totalList = get.querySelector(".get-list");
    this.totlaPrice = get.querySelector("dd");
  }

  setup() {
    this.bindEvents();
  }

  getCola(targetCola) {
    const getItem = document.createElement("li");
    getItem.className = "get-item";

    getItem.dataset.name = targetCola.dataset.name;
    getItem.dataset.img = targetCola.dataset.img;
    getItem.dataset.price = targetCola.dataset.price;

    const getItemTemplate = `<img src="./imgs/${getItem.dataset.img}" alt="" /> ${getItem.dataset.name}
    <strong>
      1
      <span class="hidden">개</span> 
    </strong>`;

    getItem.innerHTML = getItemTemplate;

    this.getList.appendChild(getItem);
  }

  bindEvents() {
    // get cola
    this.getButton.addEventListener("click", () => {
      const storageItems = this.getList.querySelectorAll("li");

      if (storageItems.length === 0) {
        alert("물건을 선택해 주세요");
      } else {
        storageItems.forEach((items) => {
          let checkPrice = 0;

          const prePrice = parseInt(this.totlaPrice.innerHTML.replace(",", ""));
          const price = parseInt(items.dataset.price);
          const count = parseInt(items.querySelector("strong").innerText[0]);

          this.totlaPrice.innerHTML = (
            prePrice + (checkPrice += price * count)
          ).toLocaleString();

          this.totalList.appendChild(items);
        });

        const selcetedCola = this.colaList.querySelectorAll(".on");
        selcetedCola.forEach((cola) => cola.classList.remove("on"));
      }
    });

    // pick cola
    const colaBtns = this.colaList.querySelectorAll("button");

    colaBtns.forEach((colaBtn) => {
      colaBtn.addEventListener("click", () => {
        // 잔액
        const balanceVal = parseInt(this.balance.innerHTML.replace(",", ""));
        // 콜라 가격
        const colaPrice = parseInt(colaBtn.dataset.price);

        if (balanceVal >= colaPrice) {
          this.balance.innerHTML = (balanceVal - colaPrice).toLocaleString();

          const storageItems = this.getList.querySelectorAll("li");

          let isStaged = false;

          for (const item of storageItems) {
            // 선택한 콜라가 이미 장바구니에 존재하는 경우
            if (item.dataset.name === colaBtn.dataset.name) {
              const itemTxt = item.querySelector("strong");
              // 장바구니 콜라의 카운트를 1 증가
              itemTxt.firstChild.textContent =
                parseInt(itemTxt.firstChild.textContent) + 1;
              isStaged = true;
              break;
            }
          }

          if (!isStaged) {
            this.getCola(colaBtn);
          }

          colaBtn.dataset.count--;

          if (parseInt(colaBtn.dataset.count) === 0) {
            colaBtn.disabled = true;

            colaBtn.insertAdjacentHTML(
              "afterbegin",
              '<strong class="soldout">품절</strong>'
            );
          }

          colaBtn.classList.add("on");
        } else {
          alert("잔액이 모자랍니다");
        }
      });
    });

    // click money input button
    this.btnInput.addEventListener("click", () => {
      //  입금액
      const inputCostVal = parseInt(this.inputCost.value);

      // 소지금
      const myMoneyVal = parseInt(this.myMoney.innerHTML.replace(",", ""));

      // 잔액
      const balanceVal = parseInt(this.balance.innerHTML.replace(",", ""));

      if (inputCostVal > 0 && myMoneyVal > inputCostVal) {
        // 변경될 소지금
        this.myMoney.innerHTML = (myMoneyVal - inputCostVal).toLocaleString();

        // 변경될 잔액
        this.balance.innerHTML = (balanceVal + inputCostVal).toLocaleString();

        // 변경될 입금액
        this.inputCost.value = "";
      } else {
        alert("입금액을 확인해주세요.");
      }
    });

    // click return money button
    this.btnReturn.addEventListener("click", () => {
      // 소지금
      const myMoneyVal = parseInt(this.myMoney.innerHTML.replace(",", ""));

      // 잔액
      const balanceVal = parseInt(this.balance.innerHTML.replace(",", ""));

      if (balanceVal !== 0) {
        // 변경될 소지금
        this.myMoney.innerHTML = (myMoneyVal + balanceVal).toLocaleString();

        // 변경될 잔액
        this.balance.innerHTML = 0;
      } else {
        alert("반환할 금액이 없습니다.");
      }
    });
  }
}

export default ColaMachineFunc;
