let sent = prompt("Please input a sentence to be encoded.");
console.log(sent);
function encode(sent){
    let first = sent.charAt(0);
    let last = sent.charAt(sent.length-1);
    newSent = first.toUpperCase() + sent.slice(1, -1) + last.toUpperCase();
    console.log(newSent);
    return newSent;
}

encode(sent);

let shortSent = ""

function shortEncode(sent){
    let first = sent.charAt(0);
    let last = sent.charAt(sent.length-1);
    shortSent = first.toUpperCase() + last.toUpperCase();
    console.log(shortSent);
    return shortSent;
}

shortEncode(sent);

function reverse(shortSent){
    let newText = shortSent.charAt(1) + shortSent.charAt(0);
    console.log(newText);
    return newText;
}

reverse(shortSent);

function divideSent(sent){
    return sent.charAt(sent.length / 2) + sent + reverse(shortSent)
}
