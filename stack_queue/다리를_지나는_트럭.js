function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const bridge = Array(bridge_length).fill(0);
    let current_weight = 0;
    while(truck_weights.length > 0){
        time ++;
        current_weight -= bridge.shift();
        
        if (current_weight + truck_weights[0] <= weight) {
            let truck = truck_weights.shift();
            bridge.push(truck);
            current_weight += truck;
        } else {
            bridge.push(0);
        }
    }
    
    return time + bridge.length
    
}
