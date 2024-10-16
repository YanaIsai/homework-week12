let result = "";
const alphabet = ["а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"];

function rand(howManyTimes) {
    for (let i = 0; i < howManyTimes; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    const randomLetter = alphabet[randomIndex];
    result = result + randomLetter;
        }
    };
rand(4);
console.log(result);