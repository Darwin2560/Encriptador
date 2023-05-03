const txtArea = document.querySelector(".text-area");
const txtMensaje = document.querySelector(".text-mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const txtEncriptado = encriptar(txtArea.value);
    txtMensaje.value = txtEncriptado;
    txtArea.value = "";
    txtMensaje.style.backgroundImage = "none";
}

function encriptar(msEncriptado) {

    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    msEncriptado = msEncriptado.toLowerCase();

    for(let i = 0; i < llavesEncriptacion.length; i++) {
        if(msEncriptado.includes(llavesEncriptacion[i][0])) {
            msEncriptado = msEncriptado.replaceAll(llavesEncriptacion[i][0], llavesEncriptacion[i][1]);
        }
    }
    return msEncriptado
}

function btnDesencriptar() {
    const txtEncriptado = desencriptar(txtArea.value);
    txtMensaje.value = txtEncriptado;
    txtArea.value = "";
}

function desencriptar(msDesencriptado) {

    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    msDesencriptado = msDesencriptado.toLowerCase();

    for(let i = 0; i < llavesEncriptacion.length; i++) {
        if(msDesencriptado.includes(llavesEncriptacion[i][1])) {
            msDesencriptado = msDesencriptado.replaceAll(llavesEncriptacion[i][1], llavesEncriptacion[i][0]);
        }
    }
    return msDesencriptado
}