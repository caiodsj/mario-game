const mario =  document.querySelector('.mario')
const pipe =  document.querySelector('.pipe')
const gameover = document.querySelector('.gameover')
const tela = document.querySelector('.game-board')
const yoshi = document.querySelector('.yoshiButton')
const ativarYoshi = document.querySelector('.ativarYoshi')
let jumpType = 'jump'
let yoshiAtivado = false

const jump = ()=>{
   mario.classList.add(jumpType)

   setTimeout(()=>{
    mario.classList.remove(jumpType)
   },500)
}

const jump2 = ()=>{
    jumpType = 'jump2'
    mario.src = './images/mario-yoshi.gif'
    mario.style.height = '150px'
    mario.style.marginLeft = '50px'
    mario.style.bottom = '0'
    ativarYoshi.textContent = "Prescione 'Y' para desativar o Yoshi"
    mario.classList.add(jumpType)
    setTimeout(() => {
    mario.classList.remove(jumpType);
    }, 800);
}
//-----------------------------

const ativarEvento = () =>{
    yoshiAtivado = true
    jump2()
}

const desativarEvento = () =>{
    yoshiAtivado = false
    jump()
}

//-----------------------------
const toggleJumpType = () => {
    if (yoshiAtivado) {
        jumpType = 'jump2'
    } else {
        jumpType = 'jump'
    }
}

/* yoshi.addEventListener('click', ()=>{
    yoshiAtivado = !yoshiAtivado
    toggleJumpType()
    if(yoshiAtivado){
        jump2()
        ativarYoshi.textContent = "Prescione 'Y' para desativar o Yoshi"
    } else {
        mario.src = './images/mario.gif'
        document.addEventListener('keydown', () => {jump()})
        ativarYoshi.textContent = "Prescione 'Y' para ativar o Yoshi"
    }
})
  */

document.addEventListener('keydown', (event) => {
    if (event.key === 'y' || event.key === 'Y') {
      if(yoshiAtivado){
        desativarEvento()
      } else{
        ativarEvento()
      }
    }
})
/* const eventoFunction = () => {
    const jump = ()=>{
        mario.classList.add('jump')
     
        setTimeout(()=>{
         mario.classList.remove('jump')
        },500)
    }
    
  }; */


const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','') 

    if(pipePosition <= 120 && pipePosition > -10 && marioPosition <= 67 ){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        mario.classList.add('rotate-scale-up')
        mario.style.bottom = `${marioPosition}px` 
        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        gameover.style.display = 'block'
        document.querySelector('.tryAgain').addEventListener("click", ()=> {
            location.reload();
          });
        tela.classList.add('tela-tremer')
        clearInterval(loop)
    }
},10)
document.addEventListener('keydown', () => {jump()}) 