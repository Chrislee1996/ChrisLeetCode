/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    sentence = sentence.split('')
    let set = new Set(sentence)
    return set.size == 26
};