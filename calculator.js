//getting all required elements
// const display = document.querySelector("#display");

// const buttons = Array.from(document.getElementsByClassName("buttons"));
// console.log(buttons);

// buttons.map( buttons => {
//   buttons.addEventListener("click",(e) =>{
//     console.log("clicked");
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.innerText)
//     switch (e.target.innerText) {
//       case"C":
//       display.innerText = '';
//       break;
//       case"Del":
//       if (display.innerText) {
//         display.innerText = display.innerText.slice(0,-1);
//       }
//       break;
//       case"=":
//       display.innerText = eval(display.innerText);
//      break;
//       default:
//         display.innerText += e.target.innerText;
//     }
//   })
// })

//getting all required elements

const screen = document.querySelector("#screen");
const btn =  document.querySelectorAll(".btn");

for (item  of btn) {
    item.addEventListener("click",(e) =>{
        btntext = e.target.innerText;

        if(btntext == "x"){
            btntext ="*"
        }
        if (btntext == "÷") {
            btntext = "/" 
        }
        screen.value += btntext;
    })
}
function sin(){
    screen.value = Math.sin(screen);
}
function cos(){
    screen.value = Math.cos(screen.value);
}
function tan(){
    screen.value = Math.tan(screen.value);
}
function pow(){
    screen.value = Math.pow(screen.value,2);
}
function sqrt(){
    screen.value = Math.sqrt(screen.value,2);
}
function log(){
    screen.value = Math.log(screen.value);
}
function pi(){
    screen.value = screen.value*22/7;
}

function fact(){
var i,num,f;
f=1
num=screen.value;
for (i=1; i < num; i++) {
    f=f*i;
}
i = i -1;
screen.value = f;
}
function del(){
    screen.value = screen.value.slice(0,-1);
}
function deleted() {
    screen.value = "";
}