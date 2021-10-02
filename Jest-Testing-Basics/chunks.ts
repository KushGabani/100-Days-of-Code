const chunkArray: Function = (arr: number[], n: number): number[][] => {
    let chunks: number[][] = [];
    if (n > arr.length) return [[]];
    else if (arr.length == 0) return [arr];
    else if (n == 0) return [arr];

    let temp: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);
        if (temp.length == n) {
            chunks.push(temp);
            temp = [];
        }
    }
    if (temp.length != 0) chunks.push(temp);

    return chunks;
}

module.exports = {
    getChunks: chunkArray,
}