
function compare(a,b){
    if(a+b > b+a) return -1
    return 1
}

function solution(numbers) {
    let answer = '';
    numbers
        .sort((a,b) => compare(a.toString(), b.toString()))
        .forEach(v=>answer = answer+v);

    if(answer[0] === '0') return '0';
    return answer;
}
