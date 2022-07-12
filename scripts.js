let _value = document.querySelector('.container__value');

// const btnDecrease= document.querySelector('.btn--decrease');
// const btnReset= document.querySelector('btn--reset');
// const btnIncrease= document.querySelector('btn--increase');

function decreaseValue() {
    let counterValue = _value.textContent;
    let updatedValue = counterValue - 1;
    if (updatedValue > 0) {
        _value.style.color = "green";
    }
    else if (updatedValue < 0) {
        _value.style.color = "red";
    }
    else {
        _value.style.color = "black";
    }
    _value.textContent = updatedValue;
  }

  function increaseValue() {
    let counterValue = _value.textContent;
    let updatedValue = parseInt(counterValue) + 1;
    if (updatedValue > 0) {
        _value.style.color = "green";
    }
    else if (updatedValue < 0) {
        _value.style.color = "red";
    }
    else {
        _value.style.color = "black";
    }
    _value.textContent = updatedValue;
  }

  function resetValue() {
    let counterValue = 0;
    _value.textContent=counterValue;
    _value.style.color = "black"
    
  }



