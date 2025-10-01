var input = document.getElementById("inputvalue");

function getValue(value){
    input.value = input.value + value;
}

function square(){
input.value = input.value * input.value;

}
function clrAll(){
    input.value = "";
}
function clr(){
    input.value = input.value.slice(0,-1);
}
function equal() {
  input.value = eval(input.value);
}



function getoperator(operator) {
    var lastChar = input.value.slice(-1); 

    if (input.value === "") return;

    if (['+', '-', '*', '/','%'].includes(lastChar)) {
        input.value = input.value.slice(0, -1) + operator;
    } 
    else {
        input.value += operator;
    }
}
