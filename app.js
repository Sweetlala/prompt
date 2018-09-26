//put the names and ages in the variabel....
var name = prompt("PLEASE ENTER YOUR NAME");
var ageCheck = prompt("please enter your age AGE");


// ..........while  condition...if he is smaller......


while (ageCheck < 18 || isNaN(ageCheck) ) {
    alert("you can not continue  " + name + ".");
    var name = prompt("PLESE ENTER YOUR name..!");
    var ageCheck = prompt("please enter your age");

    
     

};
// .....if he is bigger
if (ageCheck > 18) {

    document.getElementById('fo').innerHTML = "You are welcome to visit our site WelcOoOoome....!" + " " + name + ".";
};
swal("Good job!", "You clicked the button!", "success");

    //.............................

    // make empty array
    var shoppingList = [];
    // kopplar html to js
    var form1 = document.getElementById('shopping-form');

    // submit function lister
    form1.addEventListener('submit', function (e) {
        e.preventDefault();
        //koppla input till Js
        var input = document.getElementById('input-form').value;
        //lägg till i array ,push till array
        shoppingList.push(input);
        // visa array i HTML / Hemsida

        // gör input blank
        form1.reset();
       // gör list
        var li = document.createElement('li');
        li.innerHTML = input;
        document.getElementById('list').appendChild(li);
    });
    
    // gör analog clock
    var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
drawClock();

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
//-------------calcul----------------------
//connect HTML form with js 
var form = document.getElementById('form-input');
//
var toAddBtn = document.querySelector('#to-add');
var toSubBtn = document.querySelector('#to-sub');
var toMultyBtn = document.querySelector('#to-mul');
var toDivBtn = document.querySelector('#to-divi');
document.querySelector('.display-result').style.display = 'none'; 
//when any key is pressed ,default reload
/*form.addEventListener('submit', function(e){
    e.preventDefault();
});*/
//-- if add button is pressed
toAddBtn.addEventListener('click',function(e){
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    document.querySelector('.display-result').style.display = 'block';
    document.querySelector('.display-result').innerHTML= num1 + num2;
});
//--- if subtract button 
toSubBtn.addEventListener('click', function(e){
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    document.querySelector('.display-result').style.display = 'block';
    document.querySelector('.display-result').innerHTML = num1- num2;

});
//---- if multi
toMultyBtn.addEventListener('click',function(e){
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    document.querySelector('.display-result').style.display = 'block';
    document.querySelector('.display-result').innerHTML = num1* num2;


});
//--- if divition
toDivBtn.addEventListener('click',function(e){
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    document.querySelector('.display-result').style.display = 'block';
    document.querySelector('.display-result').innerHTML = num1/ num2;



});




