function transformStringMaj() {
    let phrase = prompt('Entrez votre phrase');
    phrase = phrase.toLowerCase();
    phrase = capitalizeFirstLetter(phrase);
    return alert('Votre phrase transformée en: ' + phrase);
}

function capitalizeFirstLetter(phrase) {
    return phrase.charAt(0).toUpperCase() + phrase.slice(1).toLowerCase();
}

function minusculeFirstLetter(phrase) {
    return phrase.charAt(0).toLowerCase() + phrase.slice(1).toLowerCase();
}

function transformStringCamel() {
    let phrase = prompt('Entrez votre phrase');
    let phrase_arr = phrase.split(' ');
    let phraseFinal = minusculeFirstLetter(phrase_arr[0]);
    for (let i = 1; i < phrase_arr.length; i++) {
        phraseFinal = phraseFinal.concat(capitalizeFirstLetter(phrase_arr[i]));
    }
    return console.log(phraseFinal);
}



// autre technique possible:


function lettreMaj(str) {
    let arr = str.toLowerCase().split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
}

function camelCase(str) {
    let arr = str.toLowerCase().split(" ");
    let arrNew = map((e, i) => {
        if (i != 0) {
            return lettreMaj(e);
        }
        else {
            return e;
        }
    });
    return arrNew.join("");
}

alert(camelCase(str));