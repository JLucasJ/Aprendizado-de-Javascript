// A função 'calcular' recebe um parâmetro 'op', que representa a operação a ser realizada.
function calcular(op) {
    // Obtém o valor do primeiro número a partir do elemento HTML com o ID 'op + 'Number1''.
    var number1 = parseFloat(document.getElementById(op + 'Number1').value);

    // Obtém o valor do segundo número a partir do elemento HTML com o ID 'op + 'Number2''.
    var number2 = parseFloat(document.getElementById(op + 'Number2').value);

    // Obtém a referência ao elemento HTML onde o resultado será exibido usando o ID 'op + 'Result''.
    var result = document.getElementById(op + 'Result');

    // Verifica se algum dos números não é um número válido ou se algum dos campos está vazio.
    if (isNaN(number1) || isNaN(number2) || 
        document.getElementById(op + 'Number1').value == '' ||
        document.getElementById(op + 'Number2').value == '') {
        // Se houver um problema com a entrada, exibe um alerta para o usuário.
        alert("Digite apenas números e preencha os dois campos!");
    } else {
        // Se a entrada for válida, executa um switch para determinar qual operação realizar.
        switch (op) {
            // Caso de adição: Soma os dois números e atribui o resultado ao campo de resultado.
            case 'add':
                result.value = number1 + number2;
                break;

            // Caso de subtração: Subtrai o segundo número do primeiro e atribui o resultado ao campo de resultado.
            case 'subtract':
                result.value =  number1 - number2;
                break;

            // Caso de divisão: Divide o primeiro número pelo segundo e atribui o resultado ao campo de resultado.
            case 'divide':
                result.value = number1 / number2;
                break;

            // Caso de multiplicação: Multiplica os dois números e atribui o resultado ao campo de resultado.
            case 'multiply':
                result.value = number1 * number2;
                break;

            // Caso de resto da divisão: Calcula o resto da divisão do primeiro número pelo segundo e atribui o resultado ao campo de resultado.
            case 'modulus':
                result.value = number1 % number2;
                break;

            // Caso de expoente: Calcula a base (number1) elevada ao expoente (number2) e atribui o resultado ao campo de resultado.
            case "exponent":
                // Math.pow() é um método que retorna a base 'number1' elevada ao expoente 'number2', é o mesmo que: number1 ** number2.
                result.value = Math.pow(number1, number2);
                break;

            // Caso padrão: Se 'op' não corresponder a nenhum caso anterior, exibe um alerta informando que a operação não foi reconhecida.
            default:
                alert("Operação não reconhecida");
        }
    }
}
