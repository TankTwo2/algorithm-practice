/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject)=>{
        let count = 0;
        const answer = [];

        functions.forEach((func, i) => {
            func().then(v=>{
                count++;
                answer[i]=v;
                if(count === functions.length) {
                    resolve(answer);
                }
            }).catch(err=>{
                reject(err)
            })
        })

    })
    
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
