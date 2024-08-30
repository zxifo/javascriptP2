let n1 = 8
let n2 = 2
let add
let subt
let mult
let div
let invalido
let calc = "*"

switch (calc) {
    case '+':
        add = n1 + n2
        console.log("Resultado da adição: " + add)
        break
    case '-':
        subt = n1 - n2
        console.log("Resultado da subtração: " + subt)
        break
    case '*':
        mult = n1 * n2
        console.log("Resultado da multiplicação: " + mult)
        break
    case '/':
        if (n2 === 0) {
            console.log("Não é possivel dividir por 0")
        } else{
            let div = n1 / n2
            console.log("Resultado da divisão: " + div)
        }
        break

    default:
        console.log('Operação inválida')
}