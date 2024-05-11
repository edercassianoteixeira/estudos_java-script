let num = document.querySelector('input#txtn')
let lis = document.querySelector('select#txtlis')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n)<= 100){
        return true
    }else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && ! inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lis.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('Número inválido ou já está na lista.')
    }
    num.value = ''
    num.focus()
}

function calcular(){
    if (valores == 0){
        window.alert('Adiciones valores antes.')
    }else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<P>Ao todo há, ${tot} números adicionados.</P>`
        res.innerHTML += `<P>O menor número adicionado foi ${menor}</P>`
        res.innerHTML += `<P>O maior número adicionado foi ${maior}</P>`
        res.innerHTML += `<P>A soma dos números adicionados é ${soma}</P>`
        res.innerHTML += `<P>A média dos números adicionados é ${media}</P>`
    }
}
