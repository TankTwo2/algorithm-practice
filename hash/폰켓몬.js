// https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript
// 프로그래머스

function solution(nums) {
    const uniqueCount = new Set(nums).size;
    const maxCount = nums.length / 2;
    return Math.min(uniqueCount, maxCount);
}
