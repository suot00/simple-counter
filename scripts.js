let _value = document.querySelector('.container__value');

// let btns = document.querySelectorAll('.container__btn button');


function decreaseValue() {
    let counterValue = _value.textContent;
    let updatedValue = counterValue - 1;
    _value.textContent = updatedValue;
    changeColor(updatedValue)
  }

function increaseValue() {
    let counterValue = _value.textContent;
    let updatedValue = parseInt(counterValue) + 1;
    _value.textContent = updatedValue;
    changeColor(updatedValue)
  }

function resetValue() {
    let updatedValue = 0;
    _value.textContent=updatedValue;
     changeColor(updatedValue)
    
  }

function changeColor(valueNumber){
    const changeValue= valueNumber;
    if (changeValue > 0) {
        _value.style.color = "green";
    }
    else if (changeValue < 0) {
        _value.style.color = "red";
    }
    else {
        _value.style.color = "black";
    }
}

// for (i of btns) {
//   i.addEventListener('click', function() {

//     console.log(this.textContent);

//     if(this.textContent=='Decrease'){
//         let counterValue = _value.textContent;
//             let updatedValue = counterValue - 1;
//             _value.textContent = updatedValue;
//             changeColor(updatedValue)
//     }else if(this.textContent=='Increase'){
//         let counterValue = _value.textContent;
//         let updatedValue = parseInt(counterValue) + 1;
//         _value.textContent = updatedValue;
//         changeColor(updatedValue)
//     } else {
//         let updatedValue =0;
//         _value.textContent = updatedValue;
//         changeColor(updatedValue)
//     }
//   });
// }



