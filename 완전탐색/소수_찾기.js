function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function getPermutations(arr, length) {
    const result = [];
    if (length === 1) return arr.map(v => [v]); // 길이가 1인 순열

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 고정된 숫자 제외
        const permutations = getPermutations(rest, length - 1); // 나머지 숫자로 순열 생성
        const attached = permutations.map(perm => [fixed, ...perm]); // 고정된 숫자와 결합
        result.push(...attached);
    });

    return result;
}

function getAllPermutations(numbers) {
    const digits = numbers.split('').map(v => +v); // 문자열을 숫자 배열로 변환
    const uniqueNumbers = new Set();

    // 1부터 numbers.length까지의 길이로 순열 생성
    for (let i = 1; i <= digits.length; i++) {
        const permutations = getPermutations(digits, i);
        permutations.forEach(perm => {
            const num = +perm.join(''); // 순열을 숫자로 변환
            uniqueNumbers.add(num); // 중복 제거
        });
    }

    return Array.from(uniqueNumbers); // Set을 배열로 변환
}

function solution(numbers) {
    let answer = 0;
    
    getAllPermutations(numbers).forEach(v=>{
        if(isPrime(v)) answer += 1;
    })
    return answer;
}