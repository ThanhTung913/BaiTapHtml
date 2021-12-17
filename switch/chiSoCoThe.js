let width =Number(prompt('nhap Width'));
let height =Number(prompt('nhap height'));
let bmi = width / (height ^ 2);
document.write('bmi');

if (bmi <18){
    document.write("underwidth");
}
else if (bmi < 25.5){
    document.write("dddd");
}
else if (bmi < 25){
    document.write("dddddddd");
}
else{
    document.write("iiiiiii")
}
