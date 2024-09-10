//votre code ici

function pairNumbers(first, last) {
    first = Number(first);
    if (first % 2 != 0) {
        first++;
    }
    last = Number(last);
    if (last % 2 != 0) {
        last--;
    }
    let output = '';
    for (let i = first; i <= last; i = i + 2) {
        output = output + i;
        if (i != last) {
            output = output + ',';
        }
    }
    return output;
}

export default pairNumbers
