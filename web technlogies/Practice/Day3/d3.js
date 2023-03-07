const fruits = ["Banana", "Orange", "Apple", "Mango"];
//document.getElementById("demo").innerHTML = fruits.toString();


document.getElementById("demo").innerHTML = fruits.join("*");

let newfruits=fruits.shift();
console.log(newfruits);


document.write("<h1>Hello</h1>")

if(window.navigator.onLine){
document.write("onlne😊")
}
else{
    document.write("offline😒")
}

let share = document.getElementById("camera")
console.log(share)

function screenshare(){
    window.navigator.mediaDevices.getDisplayMedia().then((display)=>{
        console.log(display);
    }).catch((error)=>{
        console.log(error);
    })
}