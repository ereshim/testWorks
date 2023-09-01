const buttons = document.querySelectorAll("#button");
const img = document.querySelector(".back-img");

const data = {
  g3: "Стадион",
  g1: " Жк Residence",
  b5: " Общежитие",
  g2: " Музей",
  b10: " Хрущевка",
  b7: " Мед Центр",
  b6: " Пристань",
  g4: " 1 Блок",
  b8: " 2 Блок",
  b9: " Цилиндр",
};
//Открытие кнопки
function openBtn(btn){
    btn.classList.add("active");

      const keys = Object.keys(data);
      const key = btn.classList[1];
      const foundKey = keys.find((k) => k === key);

      setTimeout(function add() {
        btn.innerHTML = `<img src = './img/minus.png'/><h3>${data[foundKey]}</h3>`;
      }, 200);
}
//Закрите карточки
function closeBtn() {
    buttons.forEach((button) => {
      button.innerHTML = "<h3>+</h3>";
      button.classList.remove("active");
    });
  }
for (const button of buttons) {
  button.addEventListener("click", () => {
    if (button.classList[2] === "active") {
      closeBtn();
    } else {
      closeBtn();
      openBtn(button);
    }
  });
}
img.addEventListener("click", () => {
  closeBtn();
});


