class ColaMachineFunc {
  constructor() {
    // menu
    const cMachine = document.querySelector(".menu");

    this.balance = cMachine.querySelector(".money-area dd");
    this.btnInput = cMachine.querySelector("#input-number+.btn-money-area");
    this.inputCost = cMachine.querySelector("#input-number");
    this.btnReturn = cMachine.querySelector(".money-area+.btn-money-area");

    // 소지금
    const myInfo = document.querySelector(".mine");
    this.myMoney = myInfo.querySelector(".money-area dd");
  }

  setup() {
    this.bindEvents();
  }

  bindEvents() {
    // click input button
    this.btnInput.addEventListener("click", () => {
      //  입금액
      const inputCostVal = parseInt(this.inputCost.value);

      // 소지금
      const myMoneyVal = parseInt(this.myMoney.innerHTML.replace(",", ""));

      // 잔액
      const balanceVal = parseInt(this.balance.innerHTML.replace(",", ""));

      if (inputCostVal && myMoneyVal > inputCostVal) {
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
