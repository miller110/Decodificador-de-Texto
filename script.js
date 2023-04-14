function criptografar() { // Essa função obtém o valor do campo de texto com o id "texto" e armazena em uma variável chamada "texto".
    let texto = document.getElementById("texto").value;
    let regex = /[^a-z\s]/g;

/*Em seguida, um regex é definido para testar se o texto contém apenas letras minúsculas e espaços em branco. 
Se o texto não atender a esses requisitos, uma mensagem de alerta é exibida e a função retorna sem fazer nada. 
Caso contrário, a função continua.*/

if (texto !== texto.toLowerCase() || regex.test(texto)) {
    alert("O texto deve conter apenas letras minúsculas e sem acento!");
    document.getElementById("texto").focus();
return;
}

document.getElementById("texto").focus();

    let tamanho_texto = texto.length;
    let criptografado = "";

    /*Dentro do loop for, cada caractere do texto é verificado e, se for uma das vogais (a, e, i, o, u), 
    é substituído por um conjunto de letras específico. Caso contrário, o caractere é mantido. 
    O resultado é armazenado em uma variável chamada "criptografado".*/

    for (let i = 0; i < tamanho_texto; i++) {
        if (texto[i] === "a") {
            criptografado += "ai";
        } else if (texto[i] === "e") {
            criptografado += "enter";
        } else if (texto[i] === "i") {
            criptografado += "imes";
        } else if (texto[i] === "o") {
            criptografado += "ober";
        } else if (texto[i] === "u") {
            criptografado += "ufat";
        } else {
            criptografado += texto[i];
        }

    }

    document.getElementById("text-cripto").value = criptografado;
    document.getElementById("foto").style.display = "none";
    document.getElementById("text-h2").style.display = "none";
    document.getElementById("text-p").style.display = "none";
    document.getElementById("copiar").style.display = "block";
    document.getElementById("text-cripto").style.display = "block";


/*Por fim, o texto criptografado é exibido no campo de texto com o id "text-cripto" e 
alguns elementos da página são exibidos/ocultados conforme necessário.*/
}

function descriptografar() {
    let criptografado = document.getElementById("texto").value;
    let texto;

    /*A função "descriptografar" é chamada quando o usuário clica no botão "Descriptografar". O texto criptografado é obtido do 
    campo de texto com o id "texto". Em seguida, cada conjunto de letras é verificado e, se corresponder a uma das vogais 
    criptografadas, é substituído pela vogal original correspondente. O resultado é armazenado em uma variável chamada "texto".*/

    if (criptografado === "ai") {
        texto = "a";
    } else if (criptografado === "enter") {
        texto = "e";
    } else if (criptografado === "imes") {
        texto = "i";
    } else if (criptografado === "ober") {
        texto = "o";
    } else if (criptografado === "ufat") {
        texto = "u";
    } else {
        texto = criptografado;
    }

    document.getElementById("text-cripto").value = texto;
    document.getElementById("foto").style.display = "none";
    document.getElementById("text-h2").style.display = "none";
    document.getElementById("text-p").style.display = "none";
    document.getElementById("copiar").style.display = "block";
    document.getElementById("text-cripto").style.display = "block";

/*Por fim, o texto descriptografado é exibido no campo de texto com o id "text-cripto" e alguns elementos
 da página são exibidos/ocultados conforme necessário.*/
}



function copiar() {
    let texto = document.getElementById("text-cripto").value;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado para a área de transferência!');
    }, (err) => {

        alert('Erro ao copiar texto: ', err);
    });

/*A função "copiar" é chamada quando o usuário clica no botão "Copiar". O texto contido no campo de texto com o id "text-cripto" 
é copiado para a área de transferência do sistema usando a API 'navigator.clipboardnavigator.clipboard. Uma mensagem de 
alerta é exibida para informar ao usuário que o texto foi copiado (ou se houve algum erro na operação).*/
}











