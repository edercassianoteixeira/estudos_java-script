function verificar(){
    var agora = new Date()
    var ano = agora.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'fotobebem.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'fotojovemm.jpg')
            }else if (idade < 50){
                img.setAttribute('src', 'fotohadulto.jpg')
            }else{
                img.setAttribute('src', 'fotohvelho.jpg')
            }
        }else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'fotobebef.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'fotojovemf.jpg')
            }else if (idade < 50){
                img.setAttribute('src', 'fotomadulta.jpg')
            }else{
                img.setAttribute('src', 'fotomvelha.jpg')
            }
        }
        res.innerHTML = `<p>Detectado ${genero} de ${idade} anos.</p>`
        res.appendChild(img)  
    }
}