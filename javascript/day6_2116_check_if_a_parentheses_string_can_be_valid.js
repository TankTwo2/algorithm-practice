/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function(s, locked) {
    const l = s.length;
    if(l%2 !== 0) return false

    let openCount = 0;
    for(let i=0; i<l; i++){
        if(locked[i] === '1'){
            openCount += s[i] === '(' ? 1 : -1;
        } else {
            openCount ++;
        }
        if(openCount < 0) return false;
    }

    let closeCount = 0;
    for(let j=l-1; j>=0; j--){
        if(locked[j] === '1'){
            closeCount += s[j] === ')' ? 1 : -1;
        } else {
            closeCount ++;
        }
        if(closeCount < 0) return false;
    }

    return true
};