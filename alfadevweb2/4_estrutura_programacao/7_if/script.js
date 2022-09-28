idade = 32;

if(idade  == 19){
    console.log('Você não pode beber');
}
if(idade >= 18){
    console.log('Você pode dirigir');
}

usuario = "monica";
senha = 'moni123';
if((usuario = "monica") && (senha = "moni123")){
    console.log('Acesso liberado!');
    alert('Bem vindo ' + usuario);
}

console.log(usuario == "monica");