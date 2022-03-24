function menuclique(){
let MenuArea = document.querySelector('.divarea')
let menuconteiner = document.querySelector('.area-logo')
if(MenuArea.style.width == '70%' )
{MenuArea.style.width = '0'
MenuArea.style.display = 'none' }

 else {
   MenuArea.style.width = '70%' 
   MenuArea.style.display = 'block' 
}
}



function viajem(){
let paises = {
  ucrania: 'ucrânia'

}


let local = document.querySelector('#ideal')
let Viajem = document.querySelector('#local')

switch(Viajem.value){
  case ucrania:
  local.innerHTML = 'vai custar 1000 reis'
  break;
  case italia:
    local.innerHTML = 'vai custar 500 reais'
  break
  case alemanha:
    local.innerHTML = 'vai custar 500 reais'
  break
  case franca :
    local.innerHTML = 'vai custar 400 reais'
  break
  case reino:
    local.innerHTML = 'vai custar 300 reais'
  break
  case polonia:
    local.innerHTML = 'vai custar 200 reais'
  break
  case suica:
    local.innerHTML = 'vai custar 200 reais'
  break
   case austria:
    local.innerHTML = 'vai custar 200 reais'
  break
  case grecia:
    local.innerHTML = 'vai custar 200 reais'
  break
}
}




var slider0 = 0
var totalslider = document.querySelectorAll('.card').length -1
function acao(){
  let img = document.querySelectorAll('card')
setInterval(function() {
  img[slider0].style.display = 'none'
  slider0++;
  if (slider0 > totalslider ) {
    slider0 = 0
  }
  img[slider0].style.display = 'block'
}, 100);
}