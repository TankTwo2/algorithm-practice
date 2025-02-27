function solution(answers) {
    var answer = [];
    const a = [1, 2, 3, 4, 5];
    const b = [2, 1, 2, 3, 2, 4, 2, 5];
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let aCount = 0,
        bCount = 0,
        cCount = 0;

    answers.forEach((v, i) => {
        if (a[i % a.length] === v) aCount++;
        if (b[i % b.length] === v) bCount++;
        if (c[i % c.length] === v) cCount++;
    });

    const maxScore = Math.max(aCount, bCount, cCount);

    [aCount, bCount, cCount].forEach((v, i) => {
        if (v === maxScore) {
            answer.push(i + 1);
        }
    });

    return answer;
}
