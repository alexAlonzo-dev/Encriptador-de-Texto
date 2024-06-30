
function encrypt(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}


function decrypt(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}


function processText(mode) {
    const input = document.getElementById('inputText').value.trim().toLowerCase();
    const textoUno = document.querySelector('.texto_uno');

    if (input === '') {
        textoUno.innerHTML = 'Ningún mensaje fue <br>encontrado';
        return;
    }

    let result = '';

    if (mode === 'encrypt') {
        result = encrypt(input);
    } else if (mode === 'decrypt') {
        result = decrypt(input);
    }

    displayResult(result, mode);
}


function displayResult(result, mode) {
    const textoUno = document.querySelector('.texto_uno');
    const textoDos = document.querySelector('.texto_dos');

    if (result === '') {
        textoUno.innerHTML = 'Ningún mensaje fue <br>encontrado';
        textoDos.innerHTML = 'Ingresa el texto que desees encriptar o <br>desencriptar';
    } else {
        textoUno.innerHTML = 'Texto ' + (mode === 'encrypt' ? 'encriptado' : 'desencriptado') + ':';
        textoDos.innerHTML = result;
    }
}


document.getElementById('encriptar').addEventListener('click', function() {
    processText('encrypt');
});

document.getElementById('desencriptar').addEventListener('click', function() {
    processText('decrypt');
});
