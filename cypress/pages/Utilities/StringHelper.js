//Just accept for format 1 value now
export function format(text ,arrayTextFormat = []) {
    for (var i = 0; i < arrayTextFormat.length; i++) {             
        var formatedText = text.replace(/{}/g, String(arrayTextFormat[i]));
    }
    return formatedText;
}