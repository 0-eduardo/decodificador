let textoEntrada = document.getElementById('textoEntrada');
let textoSaida = document.getElementById('textoSaida');
let mensagemNaoEncontrada = document.getElementById('mensagemNaoEncontrada');

function criptografar() {
    let textoDescriptografado = textoEntrada.value;
    let textoCriptografado = '';
    
    let strLength = textoDescriptografado.length;

    for (let i = 0; i < strLength; i++) {
        let letra = textoDescriptografado[i];
        
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
    let texto = textoEntrada.value;

    mensagemNaoEncontrada.innerHTML = 'descriptografado';
}

function copiar() {

}
