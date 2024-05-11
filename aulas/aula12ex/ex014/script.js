function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}h`
    
    if (hora > 5 && hora < 12){
        img.src = 'fotodia.jpg'
        document.body.style.background = '#bc8f8f'
    }else if (hora >=12 && hora < 19){
        img.src = 'fototarde.jpg'
        document.body.style.background = '#e59447'
    }else{
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#2f4f4f'
    }
}
