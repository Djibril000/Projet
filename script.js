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
    enchiffres++;
      quantity.textContent = enchiffres
    prix.textContent= enchiffres *mmm
    console.log(quantity.textContent);
    console.log(enchiffres);
    
   
 }
 )
 }

  
 console.log("Hello world");
 console.log("This is one of my first scripts");





 let btnplus = document.getElementById('.boutonPlus');
console.log(btnplus);

btnplus.addEventListener('click',function(){
   console.log('Bouton cliqué');
   
});

btnplus.addEventListener('dblclick',function(){
   console.log('Bouton double cliqué');
   
});

let deleteButtons = document.querySelectorAll('.delete-btn')

deleteButtons.forEach(button => {
   button.addEventListener('click',
      function(event){

         const listItem =
         event.target.li;
         listItem.remove();
      }
   )

}
)

for(let i=0; i<7; i ) {
   console.log(i);               
}























