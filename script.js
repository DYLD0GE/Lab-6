//lab 5 first attempt

// var tempF= 90;
// var tempC= (tempF - 32) * (5/9);
// console.log(tempC);

function convert(degree) {
    var x;
    if (degree === "C") {
        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(x);
    }



    else {
        x = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(x);
    }
}
//without html

// function convert(degree,num) {
//     var x;
//     if (degree === "C") {
//         x = num * 9 / 5 + 32;
//         console.log(x);
//     }
//
//
//
//     else {
//         x = ( num -32) * 5 / 9;
//         console.log(x);
//     }
// }
// convert("F",32);
