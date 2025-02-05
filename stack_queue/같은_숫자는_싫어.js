function solution(arr) {
    const answer = [];
    arr.forEach((v, i) => {
        const lastV = answer[answer.length - 1];
        if (v !== lastV) {
            answer.push(v);
        }
    });

    return answer;
}
