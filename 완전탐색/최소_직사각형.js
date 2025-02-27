function solution(sizes) {

    let h = -Infinity;
    let w = -Infinity;

    sizes = sizes.map(([a, b]) => (a > b ? [a, b] : [b, a]));

    sizes.forEach(([h1, w1]) => {
        h = Math.max(h, h1);
        w = Math.max(w, w1);
    });

    return h * w;
}
