let textoEntrada = document.getElementById('textoEntrada');
let textoSaida = document.getElementById('textoSaida');
let mensagemNaoEncontrada = document.getElementById('mensagemNaoEncontrada');

function criptografar() {
    let texto = textoEntrada.value;
    
    mensagemNaoEncontrada.innerHTML = 'criptografado';
}

function descriptografar() {
    let texto = textoEntrada.value;

    mensagemNaoEncontrada.innerHTML = 'descriptografado';
}

function copiar() {

}
