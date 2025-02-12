function solution(priorities, location) {
    const queue = priorities.map((p,i)=>({p,i}));
    let order = 0;

    while(queue.length>0){
        let current = queue.shift();
        if(queue.some(v=>v.p>current.p)){
            queue.push(current);
        } else {
            order ++;
            if(current.i === location){
                return order;
            }
        }
    };

    return order;
}