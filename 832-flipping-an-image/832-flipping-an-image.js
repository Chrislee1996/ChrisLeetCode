/**
 * @param {number[][]} image
 * @return {number[][]}
 */



var flipAndInvertImage = function(image) {
    for (let i = 0 ; i < image.length ; i++) {
        reverse(image[i])
    }
    return image
};

const reverse = (row) => {
    let start = 0;
    while (start < row.length / 2) {
        let end = row.length - 1 - start;
        let tmp = row[start] === 0 ? 1 : 0;
        row[start] = row[end] === 0 ? 1 : 0;
        row[end] = tmp;
        start++;
    }
}