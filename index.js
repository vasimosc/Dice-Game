function RandomNumber(){
    return Math.floor(Math.random()*6)+1;
}
var randomNumber1= RandomNumber();
var randomNumber2= RandomNumber();

var image1='images/dice'+randomNumber1+'.png';
var image2='images/dice'+randomNumber2+'.png';
document.querySelectorAll("div img")[0].setAttribute('src',image1);
document.querySelectorAll("div img")[1].setAttribute('src',image2);

if (randomNumber1>randomNumber2){
    document.querySelector("h2").innerHTML="Vasilis won!"
}
else if(randomNumber1==randomNumber2){
    document.querySelector("h2").innerHTML="Draw!"
}
else{
    document.querySelector("h2").innerHTML="Other won!"
}
