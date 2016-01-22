//function letterCapitalize(inputString) {
//    var inputString = document.form1.instring;
//    var outputString = document.form1.outstring;
//    var letter = inputString.substr(0,1);
//    var str = inputString.toLowerCase();
//    outputString.value = letter.toUpperCase() + str.substr(1);
//    
//}


function wordCount(inputString) {
    var wordArray = inputString.trim().split(" ");
    return wordArray.length;
}
