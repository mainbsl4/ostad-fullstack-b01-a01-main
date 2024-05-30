const price = document.querySelectorAll("#price");
const prDicBtn = document.querySelectorAll("#pr-dic-btn");
const prIncBtn = document.querySelectorAll("#pr-inc-btn");
const roomNumber = document.querySelectorAll("#roomNumber");
const signUp = document.querySelectorAll(".signUp");
const afterSignup = document.querySelectorAll(".after-signup");
const packageCard = document.querySelectorAll(".package-card");

let price1st = 199;
let roomCounter1 = 1;
price[0].innerHTML = price1st;

roomNumber[0].innerHTML = roomCounter1;
if (price1st <= 199) {
  prDicBtn[0].disabled = true;
}
prDicBtn[0].addEventListener("click", () => {
  price1st -= 199;
  roomCounter1 -= 1;
  if (price1st <= 199) {
    prDicBtn[0].disabled = true;
  }
  price[0].innerHTML = price1st;
  roomNumber[0].innerHTML = roomCounter1;
  console.log("clicked");
});

prIncBtn[0].addEventListener("click", () => {
  price1st += 199;
  roomCounter1 += 1;
  if (price1st >= 199) {
    prDicBtn[0].disabled = false;
  }
  price[0].innerHTML = price1st;
  roomNumber[0].innerHTML = roomCounter1;
  //   afterSignup[0].innerHTML = `Thank you for choosing ${roomCounter1} room`
});

signUp[0].addEventListener("click", () => {
  afterSignup[0].style.display = "flex";
  packageCard[0].style.height = "620px"
  afterSignup[0].innerHTML = `Thank you for choosing ${roomCounter1} room`;
});




let price2st = 249;
let roomCounter2 = 1;
price[1].innerHTML = price2st;

roomNumber[1].innerHTML = roomCounter2;
if (price2st <= 249) {
  prDicBtn[1].disabled = true;
}
prDicBtn[1].addEventListener("click", () => {
  price2st -= 249;
  roomCounter2 -= 1;
  if (price2st <= 249) {
    prDicBtn[1].disabled = true;
  }
  price[1].innerHTML = price2st;
  roomNumber[1].innerHTML = roomCounter2;
  console.log("clicked");
});

prIncBtn[1].addEventListener("click", () => {
  price2st += 249;
  roomCounter2 += 1;
  if (price2st >= 249) {
    prDicBtn[1].disabled = false;
  }
  price[1].innerHTML = price2st;
  roomNumber[1].innerHTML = roomCounter2;
  console.log("clicked");

  //   afterSignup[0].innerHTML = `Thank you for choosing ${roomCounter1} room`
});

signUp[1].addEventListener("click", () => {
  afterSignup[1].style.display = "flex";
  packageCard[1].style.height = "620px"
  afterSignup[1].innerHTML = `Thank you for choosing ${roomCounter2} room`;
});
