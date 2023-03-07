
carName= "audi";
var carName;
console.log(carName);

let x = myfunction(5,5);
console.log(x);


function myfunction(a,b){
    return a*b;
}

function toCelcius(fahrenhiet){  
    return (5/9)*(fahrenhiet -32);  

}
 
 let y =toCelcius(99);
 console.log(y);


 const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName: function () {
        return this.firstName+" "+this.lastName
    }
  };
  
 console.log(person.fullName());
console.log(typeof person);

let arrays=["array1",'array2',4,7.90];
console.log(arrays);
console.log(Array.isArray(arrays));

document.getElementById("time").onclick=function(){
   document.getElementById("time").innerHTML=Date(); 
}
let a =9.5683;
document.getElementById("para").innerHTML =
  a.toExponential() + "<br>" + 
  a.toExponential(4) + "<br>" + 
  a.toExponential(2) + "<br>" + 
  a.toExponential(6);

console.log('230'*'10');

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits[5]); 

const cars=[]
cars[0]="audi"
cars[1]="benz"
cars[2]="tata"
cars[3]="toyota"
cars[4]="hyundai"
cars[5]="honda"

for(let int=0;int<=cars.length;int++){
     console.log(cars[int]);
}

 
var items = [];
function guardarNumeros() {
    boxvalue = document.getElementById('box').value;
      items.push(boxvalue);
      console.log(items);
      return false; 
    }

const strawhat=["luffy","zoro","sanji","franky","brook","ussop","nami","robin","chopper","jimbey"]
document.getElementById("demo").innerHTML= strawhat
