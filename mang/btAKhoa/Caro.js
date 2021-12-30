let size =10;
let Caro =[];
let CaroTable="";
let isPlay_X=true;
const x_value = 1;
const o_value = 10;

for (let i = 0; i<size; i++){
    Caro[i]=[]
    for (let j = 0; j < size; j++ ){
        Caro[i][j]=0;
    }
}console.log(Caro)

CaroTable += "<table border= 1 >"
    for ( let i = 0; i<size ; i++){
        CaroTable +="<tr>"
            for (let j=0 ;j < size ; j++ ){
                CaroTable +=`<td class='${Caro[i][j] == 0 ? "" : (Caro[i][j] == 1 ? "isX" : "isO")}'  
                onclick="play(${i},${j})" > 
                ${Caro[i][j] == 0 ? "&nbsp;&nbsp;" : (Caro[i][j] ==1 ? "X" : "O")} </td>`
            } 
        CaroTable+="</tr>"
    }
CaroTable+= "</table>"
document.getElementById('Caro').innerHTML = CaroTable;

function play(i, j){
    if (Caro[i][j] != 0 ){
        alert('Không được đánh trùng nhau nhé!!!')
        return;
    }
    if (isPlay_X) {
        Caro[i][j] = x_value
        isPlay_X = false
    } else {
        Caro[i][j] = o_value
        isPlay_X = true
    }
    // for (let i = 0; i<size; i++){
    //     Caro[i]=[]
    //     for (let j = 0; j < size; j++ ){
    //         Caro[i][j]=0;
    //     }
    // } 
    CaroTable=" ";
    CaroTable += "<table border= 1 >"
        for ( let i = 0; i<size ; i++){
            CaroTable +="<tr>"
                for (let j=0 ;j < size ; j++ ){
                    CaroTable +=`<td class='${Caro[i][j] == 0 ? "" : (Caro[i][j] == 1 ? "isX" : "isO")}'
                    onclick="play(${i},${j})"> ${Caro[i][j] == 0 ? "&nbsp;&nbsp;" : (Caro[i][j] ==1 ? "X" : "O")} </td>`
                } 
            CaroTable+="</tr>"
        }
        CaroTable+= "</table>"
        document.getElementById('Caro').innerHTML = CaroTable
    
}
function win(){
    for ()
}