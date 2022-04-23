// API à utiliser pour les images de chiens: https://dog.ceo/api/breeds/image/random

const bouton = document.querySelector('.btn-primary');
const randomId = Math.floor(1+ Math.random()*10000);
const randomAge= Math.floor(1+ Math.random()*10);
const randomRegistry= Math.floor(1+ Math.random()*1000);


bouton.addEventListener('click', function(){
    fetch('https://dog.ceo/api/breeds/image/random', {})
        .then(response => response.json())
        .then((data) => {console.log(data);
            //le code ne fonctionne pas tel que prévu donc je l'ai mis en commentaire
            //document.getElementById("dogsAPI").src= data[''];

            document.getElementById("dogId").innerHTML = randomId; 
            document.getElementById("dogAge").innerHTML = randomAge + ' Years';
            document.getElementById("dogRegistry").innerHTML = randomRegistry;
        });
    })
