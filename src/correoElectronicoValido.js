function esCorreoElectronicoValido(correo) {
    var partesArroba = correo.split('@');
    if (partesArroba.length !== 2) {
        return false;
    }
    var local = partesArroba[0];
    var dominio = partesArroba[1];
    if (local.startsWith('.') || local.endsWith('.')) {
        return false;
    }
    if (!dominio.includes('.')) {
        return false;
    }
    if (dominio.startsWith('-') || dominio.endsWith('-')) {
        return false;
    }
    if (local.length < 1) {
        return false;
    }
    var partesDominio = dominio.split('.');
    var extension = partesDominio[partesDominio.length - 1];
    if (extension.length < 2) {
        return false;
    }
    var caracteresEspeciales = /[!#$%&'*+/=?^_`{|}~-]{2,}/;
    if (caracteresEspeciales.test(local)) {
        return false;
    }
    return true;
}
var correoElectronico = "ejemplo@dominio.com";
var esValido = esCorreoElectronicoValido(correoElectronico);
if (esValido) {
    console.log("La direcci\u00F3n de correo electr\u00F3nico ".concat(correoElectronico, " es v\u00E1lida."));
}
else {
    console.log("La direcci\u00F3n de correo electr\u00F3nico ".concat(correoElectronico, " no es v\u00E1lida."));
}
