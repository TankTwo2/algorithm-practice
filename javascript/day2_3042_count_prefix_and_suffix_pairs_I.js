/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    return words.filter((word,i) => {
        let answer = false;
        for(let j=0; j<words.length; j++){
            if(j!==i){
                if(words[j].includes(word)){
                    answer = true
                    break;
                }
            }
        }
        return answer;
    })
};