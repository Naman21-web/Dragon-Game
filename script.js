score = 0;
cross = true;
//onkeydown is a event
document.onkeydown = function(e){
    //console.log("key code is: ", e.keyCode)
    if(e.keyCode == 38){//code of arrowup key
        dino = document.querySelector('.dino')//selects class dino
        dino.classList.add('animateDino');//Add class animateDino inside class dino
        setTimeout(() => {
            dino.classList.remove('animateDino')//Removes this class after 0.7s as we have put animation for 0.6s
        }, 700)
    }
    if(e.keyCode == 39){//code of arrowright key
        dino = document.querySelector('.dino')
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));//computes the left value of dino
        dino.style.left = dinoX + 122 + "px";//add 112px to left to go ahead
    }
    if(e.keyCode == 37){//code of arrowleft key
        dino = document.querySelector('.dino')
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));//computes the left value of dino
        dino.style.left = (dinoX - 122) + "px";//subtract 112px to left to go back
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');//selects class dino
    gameOver = document.querySelector('.gameOver');//selects class gameOver
    obstacle = document.querySelector('.obstacle');//selects class obstacle

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));//computes the left value of dino in integer
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));//computes the top value of dino in integer

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));//computes the left value of obstacle in integer
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));//computes the top value of obstacle in integer

    offsetX = Math.abs(dx - ox);//subtracts both
    offsetY = Math.abs(dy - oy);

    //console.log(offsetX, offsetY);

    if(offsetX< 73 && offsetY<52){//if this happen game over
        gameOver.innerHTML = "GameaOver - Reload to Play Again";//Replaces text in gameOver by this text
        obstacle.classList.remove('obstacleAni')//removes this class
    }
    else if(offsetX < 145 && cross){//if this happens
        score+=1;//add score by 1
        updateScore(score);//updatescore
        cross = false;//does cross false again
        setTimeout(()=>{
            cross = true//does cross true again after every second
        }, 1000);
        setTimeout(() =>{
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));//gets animation-duration in float
            newDur = aniDur - 0.1;//decreases the animation duration to increase the speed of the obstacle
            obstacle.style.animationDurtion = newDur + 's';//adding to the obstacle class
        }, 500)
    }

}, 10);

function updateScore(score){
    scoreCont.innerHTML = "Your Score: "+ score;//shows score //innerHTML rewrites the text and remove the whole previous text
}
