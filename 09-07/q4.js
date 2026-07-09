let resultado;
let numero1 = Number(prompt("Digite o primeiro número a ser equacionado:"));
let sinal = prompt("Digite o sinal da operação desejada:");
let numero2 = Number(prompt("Digite o segundo número a ser equacionado:"));


switch (sinal) {
    case '+':
        resultado = numero1 + numero2;
        console.log(resultado);
        break;
    case '-':
        resultado = numero1 - numero2;
        console.log(resultado);
        break;
    case '*':
        resultado = numero1 * numero2;
        console.log(resultado);
        break;
    case '/':
        resultado = numero1 / numero2;
        console.log(resultado);
        break;
    default:
        console.log("ERRO");
        break;
}