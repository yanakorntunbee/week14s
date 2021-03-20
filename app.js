let gen = prompt("Enter generation");
if(gen<1945){
    console.log(gen + "Post war");
    document.getElementById("hContent").innerHTML= gen + "Post war";
}else if(gen>1946 && gen<1964){
    console.log(gen + "Post war");
    document.getElementById("hContent").innerHTML= gen + "Baby Boomer";
}else{
    console.log("Error");
    document.getElementById("hContent").innerHTML= "Error";
}