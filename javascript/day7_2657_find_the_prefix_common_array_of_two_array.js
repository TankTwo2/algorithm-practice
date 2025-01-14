/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const answer= [];
    const seemA = new Set();
    const seemB = new Set();
    let commonCount = 0;

    for(let i=0; i<A.length; i++){
        seemA.add(A[i]);
        seemB.add(B[i]);

        if(seemB.has(A[i])) commonCount ++;
        if(seemA.has(B[i]) && A[i] !== B[i]) commonCount ++;
        answer[i] = commonCount;
    }

    return answer;
};
