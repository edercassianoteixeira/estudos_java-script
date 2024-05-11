let num  = [5, 8, 2, 9, 3]
num.push(1) //adiciona na ultima casa
num.sort() //organiza em crescente
let pos = num.indexOf(8) //indentifica a casa do valor
console.log(`${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)
if(pos == -1){
    console.log('Valor não enconrado')
}else{
    console.log(`O valor está na posição ${pos}`)
}
