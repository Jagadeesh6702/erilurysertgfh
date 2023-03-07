
/*console.log('nuber from js');


let firstname= "jagadeesh"

let age= 21
let student = true;

console.log("hello",firstname);
console.log("my age is ",age);
console.log("enrolled",student);

let username= prompt("");

document.getElementById("p1").innerHTML = "hello"+username;
document.getElementById("p2").innerHTML = "my age is "+age;
document.getElementById("p3").innerHTML= "enrolled"+student;


let username;
document.getElementById("button1").onclick = function(){
   username = document.getElementById("mytext").value;
   console.log(username);
   document.getElementById("mylabel").innerHTML=username;
}

let age= window.prompt("how old are you")

console.log(typeof age);
age= Number(age)
age+=1  2*(l+b)
console.log(age);

let l
let b
let c;

l=prompt("enter the length")
l=Number(l);
b=prompt("enter the width")
b=Number(b)

c= 2*(l+b);

console.log(c);*/

let count=0;
document.getElementById("decrease").onclick= function(){
    count-=1;
    document.getElementById("number0").innerHTML = count;
}
document.getElementById("reset").onclick= function(){
    count=0;
    document.getElementById("number0").innerHTML = count;
}
document.getElementById("increase").onclick= function(){
    count+=1;
    document.getElementById("number0").innerHTML = count;
}

document.getElementById("mybutton").onclick=function() {
    if(document.getElementById("Mycheckbox").checked){
            console.log("your are subcribed");
    }
    else
    {
        console.log("you are not subcribed");
    }
}

for (let index = 0; index < 101; index++) {
    console.log(index)
    
}





      