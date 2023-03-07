
/*let mynumber= 123456;
mynumber=mynumber.toLocaleString("en-us");
mynumber=mynumber.toLocaleString("hi-IN")
mynumber=mynumber.toLocaleString("de-DE")

mynumber=mynumber.toLocaleString("en-us",{style:"currency", currency:"USD"})

mynumber=mynumber.toLocaleString("hi-IN",{style:"currency", currency:"INR"})
 mynumber=mynumber.toLocaleString("de-DE",{style:"currency",currency:"EUR"})
mynumber= mynumber.toLocaleString(undefined,{style:"percent"})
mynumber=mynumber.toLocaleString(undefined,{style:"unit",unit:"celsius"})
console.log(mynumber);*/

document.getElementById("sbutton").onclick=function () {
    
    let temp;
    if(document.getElementById("cbutton").checked){
            temp=document.getElementById("textbaox").value;
            temp=Number(temp);
            temp=toCelsius(temp)
            document.getElementById("templabel").innerHTML=temp+"°C"
    }
    else if(document.getElementById("fbutton").checked){
        temp=document.getElementById("textbaox").value;
        temp=Number(temp);
        temp=toFarenheit(temp)
        document.getElementById("templabel").innerHTML=temp+"F"
    }
    else{
        document.getElementById("templabel").innerHTML="select a unit";
    }

}

let temp=32;

function toCelsius(temp){
    return(temp-32)*(5/9);
}
function toFarenheit(temp){
    return temp*9/5+32;
}

let numbers=[1,2,3,4,5,6,78,10,11]

let maximum=Math.max(...numbers)
console.log(maximum);


/*let a=1;
let b=2;
let c=3;
let d=4;
let e=5;

console.log(sum(a,b,c,d,e));

function sum(x,y, ...numbers) {
    let total=0;
    for(let number of numbers){
        total+=number
    }
    return total;
}

let student=["jagdeesh","kesava","syed"]
student.forEach(capitalize);
student.forEach(print)

function capitalize(element, index, array) {
    array[index]=element[0].toUpperCase()+element.substr(1);
}

function print(element){
console.log(element);
}*/

let num=[1,2,3,4,5,]

let squares= num.map(square);
let cubes= num.map(cube);
squares.forEach(print)
cubes.forEach(print)



function square(element){
    return Math.pow(element,2);

}
function cube(element){
    return Math.pow(element,3);

}

function print(element){
    console.log(element);
}

let c=0
document.getElementById("increasebutton").onclick=function(){
    c++;
    document.getElementById("l").innerHTML=c;
}
document.getElementById("decreasebutton").onclick=function(){
    c--;
    document.getElementById("l").innerHTML=c
}
document.getElementById("resetbutton").onclick=function(){
    c=0;
    document.getElementById("l").innerHTML=c
}

console.log("arrow function");
let bhu=[56,84,9,5,6,898,69,5,8,682,9,5695,58,5,84,688745,89366,65,6]

bhu.sort((x,y)=>y-x)
bhu.forEach((element)=>console.log(element));

