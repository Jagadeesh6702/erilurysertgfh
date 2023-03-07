import {PI,getArea,getCircumference } from "./expo.js";
console.log(PI);
console.log(getArea(10))
console.log(getCircumference(50));
/*const store = new Map([
    ["t-shirt",20],
    ["jeans",50],
    ["socks",10],
    ["underwear",10]
]);

let price=0;
price+=store.get("jeans")
price+=store.get("t-shirt")
console.log(price);

store.set("hat",50);
store.delete("hat");
console.log(store.has("underwear"));
store.forEach((key,value)=>console.log(`${key} ${value}`));

class Player{
    
    constructor(score,name){
            this.score=score;
            this.name=name;
    }
    
    pause(){
        console.log(`${this.name} paused the game` );
    }
    exist(){
        console.log("you existed the game");
    }
}

const player1= new Player(50,"jagadeesh");

console.log(player1.score);
console.log(player1.name);
player1.pause();
player1.exist();

class Animal{
    constructor(name, age){
            this.name=name
            this.age=age;
    }
}
class Tiger extends Animal{
        constructor(name,age,speed){
            super(name,age);
            this.speed=speed
        }
}

const a1=new Tiger("simba",5,90);
console.log(a1.name);
console.log(a1.speed);


class Card{
    constructor(value,suit){
        this.value=value;
        this.suit=suit;
    }
}

const cards=[
new Card("A","hearts"),
new Card("A","Spades"),
new Card("A","diamonds"),
new Card("A","clubs"),
new Card("2","hearts"),
new Card("2","Spades"),
new Card("2","diamonds"),
new Card("2","clubs")            
]

cards.forEach(card=> console.log(`${card.value} ${card.suit}`))

setTimeout(first,3000);

function first(){
    alert(`beaware of fraud servies`);
}

let count=0;
let max= window.prompt("enter the maxmimum size")
max=Number(max)

let setinter=setInterval(countup,1000)

function countup() {
    count+=1;
    console.log(count);
    if(count>= max){
            clearInterval(setinter)
    }
}

const wait= time=>new Promise(resolve=>{
    setTimeout(resolve,time)
})

wait(3000).then(()=>console.log("thanks for waiting"));*/

let tag= document.getElementsByName("fruits");

tag.forEach(fruit =>{
    if(fruit.checked){
            console.log(fruit.value);
    }
})

let list= document.getElementsByTagName("li");
list[0].style.backgroundColor="#956888"
list[2].style.backgroundColor="#956888"

let divi= document.getElementsByClassName("shounen");
divi[0].style.border = "2px solid grey"
divi[2].style.border="3px dashed red"


