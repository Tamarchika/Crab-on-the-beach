setInterval(function(){
    var crab = document.getElementById("crab");
    var speed = 5; 
    var LeftPos = crab.offsetLeft;
    var TopPos = crab.offsetTop;


    if(crab.offsetLeft < 1200 && crab.offsetTop == 0) {      
        crab.style.left = (LeftPos + speed) + 'px';
    }

    else if(crab.offsetLeft >= 1200 && crab.offsetTop < 500) {      
        crab.style.top = (TopPos + speed) + 'px';
    }

    else if(crab.offsetTop >= 500 && crab.offsetLeft > 0) {      
        crab.style.left = (LeftPos - speed) + 'px';
    }
    
    else if(crab.offsetLeft == 0 && crab.offsetTop > 0) {       
        crab.style.top = (TopPos - speed) + 'px';
    }
    
}, 10);
