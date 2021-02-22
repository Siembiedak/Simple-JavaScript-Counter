window.onload = function(){
var currentCount = 0;
var up = document.getElementById("up");
var down = document.getElementById("down");
var reset = document.getElementById("reset");

up.onclick = function(){
  currentCount++;
  document.getElementById("countcurrent").innerHTML = currentCount;
}

down.onclick = function(){
  currentCount--;
  document.getElementById("countcurrent").innerHTML = currentCount;
}
reset.onclick = function(){
  currentCount = 0;
  document.getElementById("countcurrent").innerHTML = 0;
};
}
