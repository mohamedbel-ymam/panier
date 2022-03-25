var count1 = 0;
var count2 = 0;
var count3 = 0;

const valueFirst = document.querySelector('#valueFirst');
const valueSecond = document.querySelector('#valueSecond');
const valueThird = document.querySelector('#valueThird');
const btn1 = document.querySelectorAll('.btn-first');
const btn2 = document.querySelectorAll('.btn-second');
const btn3 = document.querySelectorAll('.btn-third');

const decrease1 = document.querySelector('.decrease1');
const decrease2 = document.querySelector('.decrease2');
const decrease3 = document.querySelector('.decrease3');

const commandValue = document.querySelector('#commandValue');

btn1.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease1')) {
      count1--;
    } else if (styles.contains('increase')) {
      count1++;
    } else {
      count1 = 0;
    }
    valueFirst.textContent = count1;
    stateHandleBtn1();
    addCommande();
  });
});
btn2.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease2')) {
      count2--;
    } else if (styles.contains('increase')) {
      count2++;
    } else {
      count2 = 0;
    }
    valueSecond.textContent = count2;
    stateHandleBtn2();
    addCommande();
  });
});
btn3.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease3')) {
      count3--;
    } else if (styles.contains('increase')) {
      count3++;
    } else {
      count3 = 0;
    }
    valueThird.textContent = count3;
    stateHandleBtn3();
    addCommande();
  });
});
function addCommande() {
  if (count1 > 0 && count2 > 0 && count3 > 0) {
    commandValue.textContent = 3;
  } else if (
    (count1 > 0 && count2 > 0) ||
    (count1 > 0 && count3 > 0) ||
    (count2 > 0 && count3 > 0)
  ) {
    commandValue.textContent = 2;
  } else if (count1 > 0 || count2 > 0 || count3 > 0) {
    commandValue.textContent = 1;
  } else {
    commandValue.textContent = 0;
  }
}
addCommande();

function stateHandleBtn1() {
  if (parseInt(valueFirst.textContent) === 0) {
    decrease1.disabled = true;
  } else {
    decrease1.disabled = false;
  }
}
stateHandleBtn1();
function stateHandleBtn2() {
  if (parseInt(valueSecond.textContent) === 0) {
    decrease2.disabled = true;
  } else {
    decrease2.disabled = false;
  }
}
stateHandleBtn2();
function stateHandleBtn3() {
  if (parseInt(valueThird.textContent) === 0) {
    decrease3.disabled = true;
  } else {
    decrease3.disabled = false;
  }
}
stateHandleBtn3();
