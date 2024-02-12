let textoEntrada = document.getElementById('textoEntrada');
let textoSaida = document.getElementById('textoSaida');
let mensagemNaoEncontrada = document.getElementById('mensagemNaoEncontrada');

function validar(str) {
    let letraUnicode = str.charCodeAt(0);

    if (letraUnicode >= 97 && letraUnicode <= 122) {
        return true;
    }
}

function criptografar() {
    let textoDescriptografado = textoEntrada.value;
    let textoCriptografado = '';
    
    let strLength = textoDescriptografado.length;

    for (let i = 0; i < strLength; i++) {
        let letra = textoDescriptografado[i];
        
        if (letra != ' ' && !validar(letra)) {
            alert('Texto inválido!\nUse apenas letras minúsculas e sem acento.\nNão utilize caracteres especiais.');
            return;
        }
        
        switch (letra) {
            case 'a':
                textoCriptografado += 'ai';
                break;
            case 'e':
                textoCriptografado += 'enter';
                break;
            case 'i':
                textoCriptografado += 'imes';
                break;
            case 'o':
                textoCriptografado += 'ober';
                break
            case 'u':
                textoCriptografado += 'ufat';
                break
            default:
                textoCriptografado += letra;
        }
    };

    mensagemNaoEncontrada.innerHTML = textoCriptografado;
}

function descriptografar() {
    let textoCriptografado = textoEntrada.value;
    let textoDescriptografado = '';

    mensagemNaoEncontrada.innerHTML = textoCriptografado;
}

function copiar() {

}
