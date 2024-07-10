function esCorreoElectronicoValido(correo: string): boolean 
   {
    const partesArroba = correo.split('@');
    if (partesArroba.length !== 2) {
        return false;
    }

    const local = partesArroba[0];
    const dominio = partesArroba[1];

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

    const partesDominio = dominio.split('.');
    const extension = partesDominio[partesDominio.length - 1];
    if (extension.length < 2) { 
        return false;
    }

    const caracteresEspeciales = /[!#$%&'*+/=?^_`{|}~-]{2,}/;
    if (caracteresEspeciales.test(local)) {
        return false;
    }

    return true;
}

const correoElectronico = "ejemplo@dominio.com";

const esValido = esCorreoElectronicoValido(correoElectronico);

if (esValido) {
    console.log(`La dirección de correo electrónico ${correoElectronico} es válida.`);
} else {
    console.log(`La dirección de correo electrónico ${correoElectronico} no es válida.`);
}
