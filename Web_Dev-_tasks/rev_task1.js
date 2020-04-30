
var best = document.getElementById("best");
var bestscores = document.getElementById("bestscores");
var demo = document.getElementById("demo");
var start = document.getElementById("start");
var saver = document.getElementById("saver");
var storage = document.getElementById("storage");
var restart = document.getElementById("restart");
var boxer = document.getElementById("boxer");
var rules = document.getElementById("rules");
var initial = document.getElementsByClassName("initial");
var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");
var ten = document.getElementById("10");
var eleven = document.getElementById("11");
var twelve = document.getElementById("12");
var thirteen = document.getElementById("13");
var onefour = document.getElementById("14");
var onefive = document.getElementById("15");
var onesix = document.getElementById("16");
var oneseven = document.getElementById("17");
var oneeight = document.getElementById("18");
var onenine = document.getElementById("19");
var twozero = document.getElementById("20");

var c = 0;
var array = []; var array1 = [];
window.addEventListener("load", function () {
    for (let counter = 0; counter < 20; counter++) {
        let newgen = Math.floor(Math.random() * 30);
        while (array1.lastIndexOf(newgen) !== -1) {
            newgen = Math.floor(Math.random() * 30);
        }
        array1.push(newgen);
    }




    one.innerHTML = array1[0];
    two.innerHTML = array1[1];
    three.innerHTML = array1[3];
    four.innerHTML = array1[4];
    five.innerHTML = array1[5];
    six.innerHTML = array1[6];
    seven.innerHTML = array1[7];
    eight.innerHTML = array1[8];
    nine.innerHTML = array1[9];
    ten.innerHTML = array1[10];
    eleven.innerHTML = array1[11];
    twelve.innerHTML = array1[12];
    thirteen.innerHTML = array1[13];
    onefour.innerHTML = array1[14];
    onefive.innerHTML = array1[15];
    onesix.innerHTML = array1[16];
    oneseven.innerHTML = array1[17];
    oneeight.innerHTML = array1[18];
    onenine.innerHTML = array1[19];
    twozero.innerHTML = array1[2];

    array1.sort(function (a, b) {
        return a - b;
    });
    console.log(array1);
    maxi = Math.max(...array1);
    console.log(maxi);


})





function timer() {




    rules.className = "container";
    boxer.className = "show";
    c = c + 0.001;
    demo.innerHTML = c.toFixed(3) + "s";
    // if (JSON.parse(localStorage.getItem("Timestorage"))=='null'){
    //    var array=[];

    //}
    // else{
    //   array=JSON.parse(localStorage.getItem("Timestorage"));
    //}
}
console.log(rules.getAttribute("class"));

//saver.addEventListener('click', function store() {

//array.push((c.toFixed(3)));
// array.sort();
// storage.innerHTML += (":" + array[0] + "s");
//  localStorage.setItem("Timestorage",array[0]);
//  localStorage.setItem("Timestorage",JSON.stringify(array));
//  console.log(localStorage);

// localStorage.setItem(x,"(array[0])");
//x++;
restart.addEventListener('click', function () {
    location.reload(false);


    boxer.className = "container";
})








//  bestscores.addEventListener('click',function(){

//   for(var j=1;j<=x;j++){
//       bestscores.innerHTML+=localStorage.getItem(j);
//    }
//  })


console.log(array1);
const rem = document.querySelector("#boxer");
rem.addEventListener('click', function (item) {
    if (item.target.className == 'btn' && item.target.textContent == maxi) {
        clearInterval(mytimer);
        array.push((c.toFixed(3)));
        array.sort();
        storage.innerHTML += (":" + array[0] + "s");
    }



    if (item.target.className == 'btn' && item.target.textContent == Math.min(...array1)) {

        const diver = item.target.parentElement;

        diver.removeChild(item.target);
        array1.splice(0, 1);
        console.log(Math.min(...array1));

    }
})


//})
//const element=document.querySelector('.btn')
//element.addEventListener('click',function(item){
 //   item.parentElement

//})
