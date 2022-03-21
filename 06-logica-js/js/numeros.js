
var num1 = prompt("Ingresa el primer numero a comparar")

var num2 = prompt("Ingresa el segundo numero a comparar")

var num3 = prompt("Ingresa el tercer numero a comparar")


if(num1>num2){
    if(num1>num3){
        alert(num1+" es el mayor");
    }
}else if(num2>num3){
    if(num2>num1)
        alert(num2+" es el mayor");
}else if(num3>num1){
    if(num3>num2){
        alert(num3+" es el mayor");
    }
}else{
    alert("ERROR EN LA EJECUCIÓN")
}