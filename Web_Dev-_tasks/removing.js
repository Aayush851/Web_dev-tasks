
var best = document.getElementById("best");
var bestscores = document.getElementById("bestscores");
var demo = document.getElementById("demo");
var start = document.getElementById("start");
var saver = document.getElementById("saver");
var storage = document.getElementById("storage");
var restart = document.getElementById("restart");
var boxer = document.getElementById("boxer");
var rules=document.getElementById("rules");
var initial=document.getElementsByClassName("initial");
var c = 0;
var array=[];



function timer() {
    rules.className= "container";
    boxer.className = "show";
    c = c + 0.001;
    demo.innerHTML = c.toFixed(3)+"s";
   // if (JSON.parse(localStorage.getItem("Timestorage"))=='null'){
    //    var array=[];

    //}
   // else{
     //   array=JSON.parse(localStorage.getItem("Timestorage"));
    //}
}
console.log(rules.getAttribute("class"));

saver.addEventListener('click', function store() {
    
    array.push((c.toFixed(3)));
    array.sort();
    storage.innerHTML+= (":" + array[0] + "s");
  //  localStorage.setItem("Timestorage",array[0]);
  //  localStorage.setItem("Timestorage",JSON.stringify(array));
  //  console.log(localStorage);
    
   // localStorage.setItem(x,"(array[0])");
    //x++;
    






}

)

restart.addEventListener('click', function () {
    location.reload(false);
   
   
    boxer.className = "container";
})








//  bestscores.addEventListener('click',function(){

//   for(var j=1;j<=x;j++){
//       bestscores.innerHTML+=localStorage.getItem(j);
//    }
//  })













var checkitem = [11, 24, 39, 47, 56, 64, 71, 83, 96, 15, 41, 45, 63, 94, 25, 56, 77, 88, 29, 20];
checkitem.sort();
const rem = document.querySelector("#boxer");
rem.addEventListener('click', function (item) {
    if (item.target.className == 'btn' && item.target.textContent == checkitem[0]) {

        const diver = item.target.parentElement;

        diver.removeChild(item.target);
        checkitem.splice(0, 1);

    }
})


//})
//const element=document.querySelector('.btn')
//element.addEventListener('click',function(item){
 //   item.parentElement

//})
