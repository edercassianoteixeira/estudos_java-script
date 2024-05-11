function contar(){
    let ini = document.querySelector('input#txtin')
    let fim = document.querySelector('input#txtfim')
    let passo = document.querySelector('input#txtpass')
    let res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = 'Contando : <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo Inválido! Passo será considerado 1')
            p = 1
        }
        if(i < f){
            for(let c = i;c <= f;c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            //Crescente
        }else{
            for(let c = i;c >= f;c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            //Decrescente
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
