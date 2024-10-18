/*
Utilizando mi primera función en JavaScript
*/

function bienvenida(){
    /*
    let base = 10;
    let altura = 20;
    let area = 0;

    area = (base * altura)/2;

    const base1 = 20;
    const altura1 = 5;
    let area2;

    area2 = (base1*altura1)/2;
    
    alert(area2)
    */

    let base = 0;
    let altura = 0;
    let area = 0;

    base = document.getElementById('base').value;
    altura = document.getElementById('altura').value;

    area = (base*altura)/2;

    alert(area)
}