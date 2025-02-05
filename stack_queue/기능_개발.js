function solution(progresses, speeds) {
    var answer = [];
    const days = progresses.map((v,i)=>Math.ceil((100-v)/speeds[i]));
    let maxDay = days[0]
    let count = 1;
    for(let i=1; i<days.length; i++){
        if(maxDay >= days[i]){
            count ++;
        } else {
            answer.push(count);
            count = 1;
            maxDay = days[i]
        }
    }
    answer.push(count);
    
    return answer;
}