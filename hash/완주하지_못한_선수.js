// 좋은 풀이방법은 아닌듯, 이미 해답을 봤으니 다음에 다시 풀어보면 좋을듯하다.
function solution(participant, completion) {
    const ptcp = new Map();
    
    completion.forEach(v=>{
        ptcp.set(v, ptcp.get(v) + 1 || 1);
    });
    
    for(let v of participant){
        const value = ptcp.get(v);
        if(value > 0){
            ptcp.set(v, value-1);
        } else {

            return v;
        }
    }
}