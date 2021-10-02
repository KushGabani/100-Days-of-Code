const chunks = require("./chunks")

test("chunkArray function exists", () => {
    expect(chunks.getChunks).toBeDefined();
});

test("length of chunks is greater than the array itself", () => {
    const actual = chunks.getChunks([1, 2, 3, 4, 5], 10);
    expect(actual).toEqual([[]]);
})

test("the array is empty; arr: empty, n = 0", () => {
    const actual = chunks.getChunks([], 0);
    expect(actual).toEqual([[]]);
})

test("the array is empty; n = 0", () => {
    const actual = chunks.getChunks([1, 2, 3, 4], 0);
    expect(actual).toEqual([[1, 2, 3, 4]]);
})

test("separate in chunks - 1", () => {
    const actual = chunks.getChunks([1, 2, 3, 4], 2);
    expect(actual).toEqual([[1, 2], [3, 4]])
})

test("separate in chunks - 2", () => {
    const actual = chunks.getChunks([1, 2, 3, 4, 5], 5);
    expect(actual).toEqual([[1, 2, 3, 4, 5]])
})

test("separate in chunks - 3", () => {
    const actual = chunks.getChunks([1, 2, 3, 4, 5], 2);
    expect(actual).toEqual([[1, 2], [3, 4], [5]])
})

test("separate in chunks - 5", () => {
    const actual = chunks.getChunks([1, 2, 3, 4, 5], 3);
    expect(actual).toEqual([[1, 2, 3], [4, 5]])
})

test("separate in chunks - 6", () => {
    const actual = chunks.getChunks([1, 2, 3, 4, 5, 6, 7, 8], 2);
    expect(actual).toEqual([[1, 2], [3, 4], [5, 6], [7, 8]])
})