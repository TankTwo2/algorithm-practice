/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let answer = s[0] === '0' ? 1 : 0;
    for(let i=1; i<s.length; i++){
        const left = s.substring(0, i).split('').filter(v=>v==="0").length
        const right = s.substring(i, s.length).split('').filter(v=>v==="1").length
        answer = Math.max(answer, left + right)
    }

    return answer
};