/*const element= document.getElementById("mybutton")
element.onclick=(()=>document.body.style.backgroundColor="green");
const element= document.body;
element.onload=func;
const element=document.getElementById("ahhhh")
element.onchange=func


const element=document.getElementById("div12")

element.onmouseover=func
element.onmouseout=func2
element.onmousedown=func
element.onmouseup=func2
function func(){
    alert("yes loading")
    element.style.backgroundColor="lightgreen"
}
function func2(){
    element.style.backgroundColor="#ff22"
}


const element=document.getElementById("div12")
const element2=document.getElementById("outer")

element.addEventListener("mouseover",changecolor)
element2.addEventListener("mouseover",changecolor,true)

function changecolor(){
    alert(`you are changng the ${this.id}`)
    element.style.backgroundColor="lightblue"
}

const buton= document.querySelector("#mybutton");
const element= document.querySelector("#myimg");

buton.addEventListener("click",()=>{
    if(element.style.display=="none"){
        element.style.display="block"
    }
    else{
        element.style.display="block"
    }
})




const element= document.getElementById("myDiv")

window.addEventListener("keydown",move)
let x= 0;
let y= 0;
function move(event){

        switch (event.key){
            case "ArrowDown":
                y+=5;
                element.style.top= y + "px";
                break;
            case "ArrowUp":
                y-=5;
                element.style.top=y+"px";
                break;
            case "ArrowRight":
                x+=5;
                element.style.left=x+"px";
                break;
            case "ArrowLeft":
                x-=5;
                element.style.left=x + "px";
                break;
            default:
                break;
        }

}


const myButton=document.getElementById("mybutton")
const myAnimation=document.getElementById("div1")

myButton.addEventListener("click",animate)

function animate(){
    let degee=0;
    let x=0;
    let y=0;
     timer=setInterval(frame,5)

     function frame(){
        if(x>=300 || y>=300){
            clearInterval(timer)
        }
        else{
            degee+=6;
            x+=1;
            y+=1;
            myAnimation.style.left=x+"px";
            myAnimation.style.top=y+"px"
            myAnimation.style.transform="rotateZ("+degee+"deg)"

        }
     }
}*/

//window.addEventListener("keydown",event=>console.log(event.key))

let canvas= document.getElementById("myCanvas");
let context=canvas.getContext("2d");

context.strokeStyle="green"
context.lineWidth=10;
context.beginPath();
context.moveTo(0,0);
context.lineTo(250,250);
context.lineTo(250,500);
context.moveTo(500,0);
context.lineTo(250,250);
context.stroke();


let canvas1= document.getElementById("canvas");
let c=canvas1.getContext("2d");
c.strokeStyle="red"


c.beginPath();
c.fillRect(0,250,250,250)
c.strokeRect(0,250,250,250)

c.fillStyle="lightblue";
c.fillRect(0,0,250,250)
c.strokeRect(0,0,250,250)

c.fillStyle="orange";
c.fillRect(250,0,250,250)
c.strokeRect(250,0,250,250)

c.fillStyle="green";
c.fillRect(250,250,250,250)
c.strokeRect(250,250,250,250)

c.fillStyle="aqua";
c.moveTo(250,0);
c.lineTo(0,250)
c.lineTo(500,250)
c.lineTo(250,0)
c.stroke();
c.fill();

let canvas2= document.getElementById("canvas1");
let c1=canvas2.getContext("2d");

c1.strokeStyle="black"
c1.lineWidth=5
c1.fillStyle="pink"
c1.beginPath();
c1.arc(250,250,250,0,2*Math.PI);
c1.stroke();
c1.fill();
c1.font="50px MV Boli";
c1.fillStyle="black";
c1.textAlign="center";
c1.fillText("One-Piece",canvas2.width/2,canvas2.height/2)
/*
//Window Object
let go=document.getElementById("mybutton1");
console.log(window);
console.log(window.outerHeight);
console.log(window.outerWidth);
console.log(window.scrollX);
console.log(window.screenY);

console.log(window.location.href);

console.log(window.location.hostname);
console.log(window.location.pathname);

//go.addEventListener("click",()=>window.open("https://www.w3schools.com"))
go.addEventListener("click",()=>window.print())




/*
const email1= document.getElementById("email");

const subbtn = document.getElementById("submit");
const getcobtn= document.getElementById("getcooie");

subbtn.addEventListener("click", ()=>{
    setCookie("email","jgade@gmail.com",360)
    setCookie("email","bhanu@gmail.com",360)
});

getcobtn.addEventListener("click", ()=>{
    email1.value=getCookie("email")
})


console.log(document.cookie);
function setCookie(name, value,daysToLive){
    const date= new Date();
    date.setTime(date.getTime()+(daysToLive*24*60*60*1000))
    let expires= "expires=" +date.toUTCString();
    document.cookie=`${name} = ${value}; ${expires}; path=/`
}

function deleteCookie(name){
    setCookie(name, null, null)
}
function getCookie(name){
    const cdecoded= decodeURIComponent(document.cookie);
    const cArray = cdecoded.split(";")
        result=null;
    cArray.forEach(element=>{
        if(element.indexOf(name)==0){
            result = element.substring(name.lenght+1)
        }
    })
    return result;
}*/