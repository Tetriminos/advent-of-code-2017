let input = `sayndz zfxlkl attjtww cti sokkmty brx fhh suelqbp
xmuf znkhaes pggrlp zia znkhaes znkhaes
nti rxr bogebb zdwrin
sryookh unrudn zrkz jxhrdo gctlyz
bssqn wbmdc rigc zketu ketichh enkixg bmdwc stnsdf jnz mqovwg ixgken
...
flawt cpott xth ucwgg xce jcubx wvl qsysa nlg
qovcqn zxcz vojsno nqoqvc hnf gqewlkd uevax vuna fxjkbll vfge`;

function splitByRow(wholeString) {
    return wholeString.split('\n');
}

function splitIntoWords(passphrase) {
    return passphrase.split(' ');
}

function sortChars(word) {
    let chars = word.split('');
    chars.sort();
    return chars.join('');
}

function sortPassphraseWords(passphrase) {
    let wordArray = splitIntoWords(passphrase);
    let sortedWordArray = wordArray.map(word => sortChars(word));
    let sortedPassphrase = sortedWordArray.join(' ');
    return sortedPassphrase;
}

function isValidPassphrase(passphrase) {
    let words = splitIntoWords(passphrase);
    for (let i = 0; i < words.length; i++) {
        let matchArray = passphrase.match(new RegExp('\\b' + words[i] + '\\b', 'g'));
        if (matchArray.length > 1) {
            return false;
        }
    }
    return true;
}

let passphrases = splitByRow(input);
let validCount = 0;
let invalidCount = 0;
let validity = false;
for (let i = 0; i < passphrases.length; i++) {
    validity = isValidPassphrase(sortPassphraseWords(passphrases[i]));
    if (validity === true) {
        console.log(`passphrase '${passphrases[i]}' is valid`);
        validCount++;
    } else {
        console.log(`passphrase '${passphrases[i]}' is not valid`);
        invalidCount++;
    }
}

console.log(`Valid passphrases: ${validCount}\nInvalid passphrases: ${invalidCount}`);