// function vishal() {
//    alert("Hello Vishal");
// }
// vishal();

// let heading = document.getElementsByClassName("heading-class");
// console.dir(heading);
// console.log(heading);

// let btn = document.getElementById("myid");
// console.dir(btn);
// console.log(btn);


// let prahs = document.getElementsByTagName("p");
// console.dir(prahs);

// let elements = document.querySelector("p"); // It will return only first element
// console.dir(elements);

// let elements1 = document.querySelectorAll("p");// It will return all elements
// console.dir(elements1);

// let elements2 = document.querySelector(".heading-class"); // It will return only first element
// console.dir(elements2);

// let elements3 = document.querySelectorAll(".heading-class");// It will return all elements
// console.dir(elements3);

// let button = document.querySelector("#myid");
// console.dir(btn);

// document.querySelector("div").children;
// console.dir(document.querySelector("div").children);

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");
// console.dir(heading);

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " hello from js";


// let dive = document.querySelectorAll(".box");
// console.dir(dive[0]);


// let idx =1 ;
// for(div of dive){
//     div.innerText = ` bhai rajput hun marna manjur hai jukna nhi bas ghar ki taraf dekh lete hai  ${idx}`;
//     idx++;
// }


// let div = document.querySelector("div");
// console.dir(div);

// let valu = div.getAttribute("class");
// console.log(valu);

// let pera = document.querySelector("p");
// console.dir(pera.setAttribute("class", "newClass "));

let dive = document.querySelector("#vishal");

dive.style.backgroundColor = "yellow";
dive.style.color = "black";
dive.style.fontSize = "30px";
dive.innerHTML = "<b> Hello from vishal </b>";

let btn = document.createElement("button");
btn.innerHTML = "Click me";
btn.style.color = "red";
btn.style.backgroundColor = "black";

document.querySelector("body").appendChild(btn);

let para = document.querySelector("p");
 
para.getAttribute("class");
// para.setAttribute("class", "container");
para.classList.add("container");
