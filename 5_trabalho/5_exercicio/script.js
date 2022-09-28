idade = 17;
cnh = false;

if(idade >= 18 && cnh == true){
    console.log("Habilitado para dirigir!");
//} else if((idade >= 18) || (cnh == false)){
//    console.log("Vai tirar sua Habilitação!");
} else if(idade < 18 || cnh == false){
    console.log("Aguarde a idade permitida!")
}