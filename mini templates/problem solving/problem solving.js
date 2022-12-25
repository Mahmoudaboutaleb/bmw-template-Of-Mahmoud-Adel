function longWord(adel) {
    let one = adel.split(" ")
    let zero = 0;
    let final;
    for (i = 0; i < one.length; i++){
        if (one[i].length > zero) {
            final = one[i]
            zero = one[i].length
        }
    }
    return final;
}
console.log(longWord(("Ahmed Ali MahmoudAdelShalabi Ziad Tamer HanaaHelmi AdelShalabi ")))

/////////////////////////////////////////////////////////////////////////////
// حل ثانى
function TheLongWord(hanaa) {
    let on = hanaa.split(" ").reduce(function (next, current) {
        console.log(next);
        console.log(current);
        console.log(`#`.repeat(60));
        return current.length > next.length ? current : next;
    })
    return on
}
console.log(TheLongWord(("Ahmed Ali MahmoudAdelShalabi Ziad Tamer HanaaHelmi AdelShalabi ")))
//////////////////////////////////////////////////////////////////////////////////////////////////
// def find_missing_letter_in(letters):
function missingLetter(x) {
    let letters = 'abcdefghijklmnopqrstuxyz'
    let difletters = letters.indexOf(x[0])
    for (i = 0; i < x.length; i++){
        if (x[i] !== letters[difletters + i]) {
            return letters[difletters + i]
        } 
    }
    return 'No Missing Letter In Sequence'
}
// # Testing Ouput
console.log(missingLetter("abcdeghi")) //# f
console.log(missingLetter("defgi"))// # h
console.log(missingLetter("xyz"))// # No Missing Letter In Sequence
///////////////////////////////////////////////////////////////////////////////////////////////
function convert(n) {
    let arrayNumber = n.toString().split("")
    arrayNumber = arrayNumber.map((x) =>parseInt(x)).reverse()
    return arrayNumber
}

console.log(convert(564987654)) //[4,5,6,7,8,9,4,6,5]
console.log(convert(529132)) //[2,3,1,9,2,5]
////////////////////////////////////////////////////////////////////////////////////////////////
function removeChar(word, c) {
    return word.split("").filter(function (x) {
        return x !== c.toLowerCase() && x !== c.toUpperCase()
    }).join("")
}

console.log(removeChar("ElddzeroD WebDD ddSchool", "d"))//  # Elzero Web School
console.log(removeChar("ElxzeroX Web Sxchool", "x"))//  # Elzero Web School
console.log(removeChar("Elzero@ Web@@ @@School", "@"))//  # Elzero Web School
/////////////////////////////////////////////////////////////////////////////////////
function dublicate(e) {
    let dubWord = e.split(' ')
    let arrayDublicate = []
        for (i = 0; i < dubWord.length; i++){
            if (arrayDublicate.indexOf(dubWord[i]) === -1) {
                arrayDublicate.push(dubWord[i])
            }
        }
        return arrayDublicate.join(" ")
    }
console.log(dublicate('Elzero Web Web School'));
console.log(dublicate('Egypt Is Is My My Country'));
//////////////////////////////////////////////////////////////////////////////////////
function setOption(x) {
    let setWord = x.split(" ")
    let set = new Set (setWord)
    let arrayOfSet = [...set]
    return arrayOfSet
    .join(" ")
}
console.log(setOption('Elzero Web Web School'));
console.log(setOption('Egypt Is Is My My Country'));
//////////////////////////////////////////////////////////////////////////////////
function add_commas_and_underscore(x) {
    let add = x.toLocaleString().split("")
    add[add.length - 4] = "_";
    return add.join("")
}

console.log(add_commas_and_underscore(120))// # 120
console.log(add_commas_and_underscore(1530))// # 1_530
console.log(add_commas_and_underscore(120510650))// # 120,510_650
console.log(add_commas_and_underscore(510650480910))// # 510,650,780_910
console.log(add_commas_and_underscore(12069057014032))// # 12,069,057,014_032