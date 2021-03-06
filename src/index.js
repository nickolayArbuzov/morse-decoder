const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let string = '';
    for (let i = 0; i < expr.length/10; i++){
        let char = '';
        for(let j = 0; j < 10; j += 2){
            if('' + expr[j + i*10] + expr[j+1 + i*10] == '10'){
                char += '.';
            } else 
            if ('' + expr[j + i*10] + expr[j+1 + i*10] == '11'){
                char += '-';
            } else if ('' + expr[j + i*10] == '*'){
                j += 9;
                string += ' ';
            } 
        }
        if(char){
            string += MORSE_TABLE[char];
        }
    }
    return string;
}

module.exports = {
    decode
}