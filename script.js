let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false)
    {
        console.log("Game has started");
        started = true;

        levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx])
    {
        if(gameSeq.length == userSeq.length)
        {
            setTimeout(levelup, 800);
        }
    }
    else
    {
        h2.innerHTML = `Game Over! Your Score is <b>${level}</b> <br> Press any key to start`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        resetGame();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function resetGame(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}