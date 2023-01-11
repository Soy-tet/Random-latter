var latter = (["a", "b" , "c", "d","e","f","g","h","i","j"]).join("").toUpperCase().split("")
function random (){
    var number = Math.random() *888+100;
    number = Math.trunc(number).toString().split("");
    var i = latter[number[0]];
    var z = latter[number[1]];
    var m = latter[number[2]];
    var output = i + z + m;
    return output;
    // console.log(output)
}
function change (){
    return document.getElementById("demo").innerHTML= random();
}
