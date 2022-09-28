let a = 5; //let fragmenta por escopo

function multi(x,y){
    let a = x * y;
    if(a > 10){
        let a = 0;
        console.log(a);
       }
    console.log(a);
}
console.log(a);
multi(3,7);