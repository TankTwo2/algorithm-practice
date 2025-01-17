/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    const n = derived.length
    for(let i=0; i<=1; i++){
        const original = [];
        original[0] = i;

        for(let j=1; j<n; j++){
            original[j] = original[j-1] ^ derived[j-1]
        }
        if((original[n-1] ^ original[0]) === derived[n-1]){
            return true
        }
    }
    return false
};
