//variables
const ejerPrimero = document.getElementById('uno')
const ejer1 = document.getElementById('ejer1')

const ejerDos = document.getElementById('dos')
const ejer2 = document.getElementById('ejer2')

const ejerTres = document.getElementById('tres')
const ejer3 = document.getElementById('ejer3')


ejerPrimero.addEventListener('click', llamarejer)
ejerDos.addEventListener('click', llamarejer2)
ejerTres.addEventListener('click', llamarejer3)


//funciones
function llamarejer(){
    if(ejer1.classList.contains('vista')){
        ejer1.classList.remove('vista')
    }else{
        ejer1.classList.add('vista')
    }
}

function llamarejer2(){
    if(ejer2.classList.contains('vista')){
        ejer2.classList.remove('vista')
    }else{
        ejer2.classList.add('vista')
    }
}

function llamarejer3(){
    if(ejer3.classList.contains('vista')){
        ejer3.classList.remove('vista')
    }else{
        ejer3.classList.add('vista')
    }
}



