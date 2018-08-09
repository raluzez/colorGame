var numOfSq=6
var colors=generateRandomColors(numOfSq);
var colorDisplay=document.querySelector("#colorDisplay")
var pickedColor=pickColor();
var squares=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset")
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfSq=3
    colors=generateRandomColors(numOfSq);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
})
hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOfSq=6
    colors=generateRandomColors(numOfSq);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
    }
})
resetButton.addEventListener("click",function(){
    colors=generateRandomColors(numOfSq);
    message.textContent="";
    pickedColor=pickColor();
    this.textContent="New Color"
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue";
})
colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i]

    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor){
            h1.style.backgroundColor=clickedColor;
            message.textContent=("Correct!");
            resetButton.textContent="Play Again?"
            changeColors(clickedColor);
        }
        else{
            this.style.backgroundColor="#232323";
            message.textContent=("Try Again");
        }
    })
}
function generateRandomColors(num){
    var arr=[]

    for(var i=0;i<num;i++){
        arr.push(randomColor())
    }
    return arr
}
function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}
function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}
function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}