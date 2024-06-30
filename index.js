// Función de encriptación
function encrypt(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

// Función de desencriptación
function decrypt(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

// Función para procesar el texto según el modo (encriptar o desencriptar)
function processText(mode) {
    const input = document.getElementById('inputText').value.trim().toLowerCase();
    const textoUno = document.querySelector('.texto_uno'); // Elemento donde se mostrará el resultado

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

// Función para mostrar el resultado en la interfaz
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

// Event listeners para los botones de encriptar y desencriptar
document.getElementById('encriptar').addEventListener('click', function() {
    processText('encrypt');
});

document.getElementById('desencriptar').addEventListener('click', function() {
    processText('decrypt');
});
