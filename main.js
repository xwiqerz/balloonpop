//ger poppade ballonger ett värde
let popped = 0;
//varje gång sidan laddas ska detta köras
document.body.onload = addElement;
//funktion som lägger till ett fler divtaggar(ballonger)
function addElement () { 
  //vill använda denna
  const currentDiv = document.getElementById("balloon-gallery"); 
  let i;
  //gör en for loop så om det är mindre än 24 divar(ballonger) så körs den
  for (i = 0; i < 24; i++) {
    //gör en ny div
    const newDiv = document.createElement("div");
    //ger den klassnamnet balloon så min ifsatsen nedan kommer köras
    newDiv.className = "balloon";
    //lägger in en textnode på nya diven
    currentDiv.appendChild(newDiv);
  }
}
document.addEventListener('mouseover', function(e){
// Om man hovrar över ett item med classnamn "balloon" så händer det nedan.
if (e.target.className === "balloon"){
  //ändrar css
  e.target.className = "balloonpopped"
  e.target.style.backgroundColor = "#ededed";
  e.target.textContent = "POP!";
  //lägger till på variablen popped
  popped++;
  removeEvent(e);
  //kallar funktionen nedan
  checkAllPopped();
  }   
});
function removeEvent(e){
  e.target.removeEventListener('mouseover', function(){
  })
};
function checkAllPopped(){
  //om 24 ballonger poppas så aktiveras if satsen
  if (popped === 24){
    //hämtar balloon-gallery
    let gallery = document.querySelector('#balloon-gallery');
    //hämtar yay-no-balloons
    let message = document.querySelector('#yay-no-balloons');
    //ändrar i HTML
    gallery.innerHTML = '';
    message.style.display = 'block';
    balloon_container.innerHTML = "YAY!";
    }
};