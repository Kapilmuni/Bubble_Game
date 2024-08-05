function bubbleGame() {
    var bag="";
    for(i=1;i<=147;i++){
        let rnum=Math.floor(Math.random()*10);
        bag+= `<div class="bubble">${rnum}</div>`;
    }
    document.querySelector("#pbtm").innerHTML=bag; 
}

var timer=60;
function runTimer(){
    var timerInt= setInterval(() => {
        if (timer>0) {
            timer--;
            document.querySelector("#timerVal").textContent=timer;
        } else {
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
        }   
    }, 1000);
}

var hitrn;
function getNewHit(){
    hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

var score=0;
function increaseScore() {
    score +=10;
    document.querySelector("#scoreval").textContent=score
}


document.querySelector("#pbtm").addEventListener("click",
    function (details) {
        var clickedNum = Number(details.target.textContent)
        if(clickedNum === hitrn){
            increaseScore();
            bubbleGame();   
            getNewHit();
        }
    });


runTimer();
bubbleGame();
getNewHit();
// increaseScore();
