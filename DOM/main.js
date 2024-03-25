// const ul = document.getElementById("ul");

// const input = document.getElementById("input");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//   const listItem = document.createElement("li");
//   listItem.innerHTML = input.value;

//   ul.appendChild(listItem);
// });

// console.log(btn, input, )
// const btn = document.getElementById("btn");
// const numOne = document.getElementById("numOne");
// const numTwo = document.getElementById("numTwo");

// const result = document.getElementById("result");

// btn.addEventListener("click", () => {
//   const numberOne = Number(numOne.value);
//   const numberTwo = Number(numTwo.value);

//   const sum = numberOne + numberTwo;

//   result.innerText = sum;
//   console.log(sum);
// });

// const paragraph = document.getElementsByClassName("paragraph");

// const result = document.getElementById("result");


// btn.addEventListener("click", () => {
//   const title = document.getElementsByTagName("h3")[0];
//   title.style.color = "red";

//   const fontSize = title.style.fontSize.replace("px", "");
//   const parsedFontSize = Number(fontSize);

//   if (parsedFontSize == 0) {
//     title.style.fontSize = "16px";
//   } else {
//     title.style.fontSize = parsedFontSize * 2 + "px";
//   }

//   console.log(parsedFontSize * 2 + "px");
// });

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
//  alert("Hello Alert!");
const pressed = confirm("Are you sure you want to delete this alert?");

console.log(pressed);
if(pressed){
    console.log("Ok pressed");
}else{
    console.log("canceled")
}

});

function onMouseOver (){

    console.log("Mouse Over", Date.now());
}

// console.log(result)
