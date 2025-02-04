function solution(clothes) {
    let answer = 1;
    const clothesMap = {};
    clothes.forEach(([v,key])=>clothesMap[key] = (clothesMap[key]||1)+1);

    Object.values(clothesMap).forEach((v)=>{
        answer *= v;
    })

    return answer - 1;
}
