let galerija = document.querySelector('div.galerija');
let mygtukasRodyti = document.querySelector('button.rodyti');
let mygtukasMaisyti = document.querySelector('button.maisyti');
let nuotraukos = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];
let nuotraukosUl = document.querySelector('.galerija ul');
const path = 'img/';


mygtukasRodyti.addEventListener('click',rodyti);
mygtukasMaisyti.addEventListener('click',maisyti);


function rodyti(){
    for(i=0; i<nuotraukos.length;i++){
        let li = document.createElement('li');
        nuotraukosUl.appendChild(li);
        let imgElement = document.createElement('img');
        li.appendChild(imgElement);
        imgElement.src=path+nuotraukos[i];
        mygtukasRodyti.style.display="none";
    }
}
let imgElementas = document.querySelectorAll('.galerija');
for (p=0; p<imgElementas.length; p++){
    imgElementas[p].ondblclick = function (e){
        e.target.src = path + '11.jpg';
    }
}

function maisyti(){
    nuotraukos.sort(function(){return 0.5 - Math.random()});
    localStorage.setItem('mixList', nuotraukos);
    let sorted = JSON.stringify(localStorage.getItem('mixList'))
    sorted = sorted.split(", ")
    console.log(sorted)
    let imgElementai = document.querySelectorAll('.galerija img');
    for (i=0; i<nuotraukos.length; i++){
        imgElementai[i].src=path+nuotraukos[i];
    }
}