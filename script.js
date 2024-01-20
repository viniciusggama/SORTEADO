let input = window.document.getElementById('numero')
let res = window.document.getElementById('res')
let btn = window.document.getElementById('btn')
const numerosSorteados= []


btn.addEventListener("click",()=>{

        if(input.value < 0){
            res.innerHTML="VALOR INVALIDO DIGITE NUMERO MAIORES QUE ZERO"
        }else{
            let numeroSortado = Math.floor(Math.random()*input.value)
            res.innerHTML =+ numeroSortado
            numerosSorteados.push(numeroSortado)
            console.log(numerosSorteados)
            numerosSorteados.length = 0
        }
    
})

