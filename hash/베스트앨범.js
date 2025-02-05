function solution(genres, plays) {
    const answer = [];
    const playsMap = {};
    const playsMap2 = [];
    
    for(let i=0; i<genres.length; i++){
        playsMap[genres[i]] = (playsMap[genres[i]]||0) + plays[i];
        const list = playsMap2[i];
        playsMap2[i] = [genres[i], playsMap2[i] ? playsMap2[i][0] + plays[i] : plays[i], i];
    };
    
    const playsMap3 = Object.entries(playsMap).sort((a,b)=> b[1] - a[1]);
    const a = playsMap2.sort((a,b) => b[1] - a[1]);
    
    playsMap3.forEach(v3=>{
        playsMap2.filter(v2=> v2[0]===v3[0]).slice(0,2).forEach(v=>{
            answer.push(v[2]);
        });
    });
    
    return answer;
}