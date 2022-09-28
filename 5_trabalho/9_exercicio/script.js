num = 15;

for(n = 2; n < num; n++){ //
    if(num % n == 0){
        console.log("Não é número primo!");
    }
}

/**
 * num = prompt("insira um número");
 * 
 * for(x = numero; x > 0; x--){
 * if(numero % x == 0)
 * divisao++
 * }
 * 
 * if(divisao == 2){
 * console.log(divisao + '- O número ' + numero + ' é um número primo');
 * }else{
 * console.log(divisao + '- O número ' + numero + ' não é um número primo');
 * }
 * 
 * vai pegando o número e diminuindo um até que não reste nenhum número, 
 * e certificando que ele só é divido por ele mesmo e por um.
 * o if de baixo só calcula quantas vezes o número foi divisível, ou seja,
 * se foi calculado somente duas vezes, logo número primo / que é divisível por ele mesmo e por um.
*/
