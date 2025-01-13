/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const str = num.toString(2);
    let answer = '';
    for(let v of str){
        if(v === '0') answer += '1'
        if(v === '1') answer += '0'
    }
    return parseInt(answer,2);
};