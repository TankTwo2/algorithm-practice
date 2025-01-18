/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let answer = ''
    for(let char of num.toString(2)){
        if(char === "0") answer += '1';
        if(char === "1") answer += '0';
    }
    return parseInt(answer,2)
};
