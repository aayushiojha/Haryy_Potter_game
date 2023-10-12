score = 0;
cross = true;


audio = new Audio('hogwarts.mp3');

audiogo = new Audio('wrong.mp3');

setTimeout(()=>{
    audio.play()
},1000);


document.addEventListener("keydown", (event) => {
    console.log("Key pressed is ", event.key);
    if (event.key === "ArrowUp") { // Check if the pressed key is the "Up" arrow key
        const harry = document.querySelector('.harry'); // Use the correct class name
        harry.classList.add('animateHarry'); // Add the 'animateHarry' class
        setTimeout(() => {
            harry.classList.remove('animateHarry'); // Remove the 'animateHarry' class after 700ms
        }, 700);
    }

    if (event.key === "ArrowRight") { // Check if the pressed key is the "Up" arrow key
        harry = document.querySelector('.harry');
        harryX = parseInt(window.getComputedStyle(harry,null).getPropertyValue('left'));
        harry.style.left = harryX + 112 +"px";
    }

    if (event.key === "ArrowLeft") { // Check if the pressed key is the "Up" arrow key
        harry = document.querySelector('.harry');
        harryX = parseInt(window.getComputedStyle(harry,null).getPropertyValue('left'));
        harry.style.left = (harryX - 112) +"px";
    }

});

setInterval(() => {
    harry = document.querySelector('.harry');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(harry,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(harry,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    offsetX= Math.abs(dx-ox);
    offsetY= Math.abs(dy-oy);

    if(offsetX<73 && offsetY<52){
      //  console.log(offsetX);
       
        gameOver.innerHTML = "Game Over";
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(()=>{
            audiogo.pause();
            audio.pause();

        },1000);
        
    }

    else if(offsetX<145 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross = true;
        },1000);

        setTimeout(()=>{
            aniDur=parseFloat(window.getComputedStyle(obstacle
            ,null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's'; 

        },500);
        
        
    }
}, 10);



function updateScore(score){
    scoreCont.innerHTML="Your Score: " + score;
}