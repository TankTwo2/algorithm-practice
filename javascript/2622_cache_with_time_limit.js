class TimeLimitedCache {
    constructor() {
        this.map = new Map();
    }

    set(key, value, duration){
        const now = Date.now();
        const expiredTime = now + duration;

        const existAndNotExpired = this.map.has(key) && this.map.get(key).expiredTime > now
        this.map.set(key,{expiredTime, value});

        return existAndNotExpired;
    }

    get(key){
        const now = Date.now();
        if(this.map.has(key)){
            const { value, expiredTime } = this.map.get(key);
            if(expiredTime > now){
                return value;
            } else {
                this.map.delete(key);
            }
        }
        return -1;
    }

    count(){
        const now = Date.now();
        let validCount = 0;

        for(const [key, {expiredTime}] of this.map.entries()){
            if(expiredTime > now){
                validCount ++;
            } else {
                this.map.delete(key);
            }
        };
        return validCount;
    }
}