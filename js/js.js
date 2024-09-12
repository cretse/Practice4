'use strict';

// 1

function printEvenNumbers() {
    let a = parseInt(prompt("Введите значение a:"));
    let b = parseInt(prompt("Введите значение b:"));
    
    for (let number = a; number <= b; number++) {
        if (number % 2 === 0) {
            alert(number);
        }
    }
}
printEvenNumbers();

// 2 

let i = 0;

while(i<3){
    i++;
    alert( `number ${i}!` );
}

// 3
  
function x(){

    let num;

    while(true){
        let num = Number(prompt('Введите число больше 10'));

        if(num<10){
            alert("Число должно быть больше 10. Попробуйте еще раз.");
        }
        if(num>10){
            break;
        }
    }
    
}

x();


//4

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
console.log(min(11, 10));

//5 

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );


//6 

function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?');
}