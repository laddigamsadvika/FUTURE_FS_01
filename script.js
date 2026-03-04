// Typing Effect
const text = "Python Full Stack Developer | Django | React | REST APIs";
let i = 0;

function type(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(type,60);
}
}
type();

// Scroll Reveal
function reveal(){
let reveals = document.querySelectorAll(".reveal");

for(let i = 0; i < reveals.length; i++){
let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let elementVisible = 100;

if(elementTop < windowHeight - elementVisible){
reveals[i].classList.add("active");
}
}
}

window.addEventListener("scroll", reveal);
reveal();