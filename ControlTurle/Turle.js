const arrow_left= 37;
const arrow_up= 38;
const arrow_right= 39;
const arrow_down= 40;
const step= 5;
const turle_move_right ="/Users/prom1/Desktop/con rùa/C1121I1/ControlTurtle/images/right.jpg" ;
const turle_move_upt = "//Users/prom1/Desktop/con rùa/C1121I1/ControlTurtle/images/up.jpg";
const turle_move_down = "//Users/prom1/Desktop/con rùa/C1121I1/ControlTurtle/images/down.jpg";
const turle_move_left = "/Users/prom1/Desktop/con rùa/C1121I1/ControlTurtle/images/left.jpg";
const turle_width ="100px"
const turle_height ="100px"

function init(){
    let turle =document.getElementById('turle');
    turle.src = turle_move_right;
    turle.style.width = turle_width;
    turle.style.height =turle_height;
    turle.style.position= "relative";
    turle.style.left= 0;
    turle.style.top= 0;

    window.addEventListener("keydown", ControlTurlconsole);
}

function ControlTurle(event){
    switch (event.keyCode){
        case arrow_left:{
            let turle = document.getElementById('turle');
            turle.src = turle_move_left;
            if(parseInt(turle.style.left) >=0){
                turle.style.left =(parseInt(turle.style.left) - step) + "px"
            }
            break
        }
    }
}