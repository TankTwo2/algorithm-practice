function solution(brown, yellow) {
    for(let yellowH=1; yellowH<= Math.sqrt(yellow); yellowH++){
        if(yellow % yellowH === 0){
            const yellowW = yellow / yellowH;
            if(yellow + brown === (yellowW+2) * (yellowH+2)){
                return [yellowW+2, yellowH+2]        
            }
        }
    }
}