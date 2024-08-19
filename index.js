window.alert("Bienvenue sur ma page web")

let Achat = document.getElementsByClassName('.First');
 for (let i = 0; i < Achat.length; i++) {
let  prix = Achat[i].children[3];
let btnplus = Achat[i].children[6];
let boutonMoins = Achat[i].children[4];
let bousupp = Achat[i].children[7];
let quantity = Achat[i].children[5];
let enchiffres = parseInt(quantity.textContent)



 console.log(prix);
 boutonMoins.addEventListener ( 'click', function () {
    enchiffres--
 }
 )
 boutonMoins.addEventListener ( 'click', function () {
    enchiffres++
 }
 

 
 )
 
 

 }

  
 console.log("Hello world");
 console.log(4+4);
 

























