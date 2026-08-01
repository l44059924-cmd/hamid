const watch=document.getElementById("watch3d");

let rx=0;
let ry=0;

document.addEventListener("mousemove",e=>{

const x=(e.clientX/window.innerWidth-.5)*18;
const y=(e.clientY/window.innerHeight-.5)*18;

rx=-y;
ry=x;

});

let auto=0;

function animate(){

auto+=0.35;

watch.style.transform=
`
rotateX(${rx}deg)
rotateY(${ry+auto}deg)
`;

const now=new Date();

const s=now.getSeconds();
const m=now.getMinutes()+s/60;
const h=(now.getHours()%12)+m/60;

document.querySelector(".second").style.transform=
`translateX(-50%) rotate(${s*6}deg)`;

document.querySelector(".minute").style.transform=
`translateX(-50%) rotate(${m*6}deg)`;

document.querySelector(".hour").style.transform=
`translateX(-50%) rotate(${h*30}deg)`;

requestAnimationFrame(animate);

}

animate();

window.addEventListener("scroll",()=>{

const y=window.scrollY*0.08;

document.querySelector(".bg-glow").style.transform=
`translate(-50%,calc(-50% + ${y}px))`;

});
