function solution(s){
    // if(s[0] === ')' || s[s.length-1] === '(') return false;
    let left = 0;
    let right = 0;
    
    for(let i=0; i<s.length; i++){
        if(s[i] === '(') left += 1;
        else {
            left -= 1;
            if(left < 0) return false;
        };
    }
    
    for(let i=s.length-1; i>-1; i--){
        if(s[i] === ')') right += 1;
        else {
            right -= 1;
            if(right < 0) return false;
        };
    }

    return true;
}