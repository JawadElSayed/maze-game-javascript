

window.onload = game ;

// game function


function game () {

    var game = document.getElementById("game");
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var start_round ;
    var reach_end ;
    var boundary = document.getElementsByClassName("boundary");
    var touch ;
    var scouring = document.getElementsByClassName("example");
    var scour = 0 ;
    var status = document.getElementById("status");
    var newgame = 0 ;

    scouring[0].innerHTML = "scour: " + scour; 

    // start

    start.onmouseover = function () {
            start_round = 1;
            touch = 0 ;
            scouring[0].innerHTML = "scour: " + scour; 
            status.innerHTML = "Begin by moving your mouse over the \"S\".";
            leav_boundary();
    }


    // touching boundary

    for ( var j = 0 ; j < boundary.length - 1 ; j++){
        boundary[j].onmouseover = function () {
            if (start_round == 1) {
                for ( var i = 0 ; i < boundary.length - 1 ; i++){
                    boundary[i].style.backgroundColor = "red";
                    touch = 1;
                    scouring[0].innerHTML = "scour: " + scour;
                    status.innerHTML = "You Lose.";
                }
            }
            if (start_round == 1) {
                scour -= 10;
                scouring[0].innerHTML = "scour: " + scour;
                start_round = 0;
            }
        }
    }
    function leav_boundary() {
                for ( var i = 0 ; i < boundary.length - 1 ; i++){
                    boundary[i].style.backgroundColor = "";
                }
    }


    // reachin end

    end.onmouseover = function() {
        if (touch == 0  && start_round == 1) {
            scour += 5 ;
            scouring[0].innerHTML = "scour: " + scour;
            start_round = 0;
            status.innerHTML = "You Win.";
        }
    }

    end.onmouseleave = function() {
        reach_end = 0;
    }

    // restart game

    start.onclick = function () {
        start_round = 1;
        touch = 0 ;
        scour = 0;
        scouring[0].innerHTML = "scour: " + scour; 
        status.innerHTML = "Begin by moving your mouse over the \"S\".";
        leav_boundary();
    }


    // cheating case

    game.onmouseleave = function (){
        if (start_round == 1){
            status.innerHTML = "No cheating ";
            start_round = 0;
        }
    }

    

}






