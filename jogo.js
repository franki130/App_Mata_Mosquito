
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')
if(nivel==='normal'){
    //1500
    criaMosquitoTempo = 1500
}else if(nivel==='dificil'){
    //1100
    criaMosquitoTempo = 1100
}else if(nivel=='chuckNorris'){
    //750
    criaMosquitoTempo = 750
}
//ajustando o palco dinamico
function ajustaTamanhoPalcoJogo(){
    altura  = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()

var cromometro = setInterval(function(){
    tempo-=1
    if(tempo<0){
        clearInterval(cromometro)
        clearInterval(criaMosca)
        window.location.href='vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

//creando o metodo randomico
function posicaoRandomica(){
    //remover mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        //testando os numeros de vida
        if(vidas>3){
            window.location.href='fim_de_jogo.html'
        }else{
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
            vidas++
        }
    }

    //posição aleatoria dentro do body
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

    //operador ternario
    posicaoX  = posicaoX < 0 ? 0 : posicaoX
    posicaoY  = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    //identifica o elemento pelo ID para remover
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }
    //criando o mosquito dentro do body
    document.body.appendChild(mosquito)

}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    //console.log(classe)
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}
//olhando o moquito de lado direito o lado izquerdo
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    //console.log(classe)
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
