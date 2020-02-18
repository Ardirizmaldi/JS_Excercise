const Pangram = function (sentence) {
    this.sentence = sentence;
    this.isPangram = function () {
        var sentence = this.sentence.toLowerCase().split('');
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        for (var i = 0; i < alphabet.length; i++) {
            if (sentence.indexOf(alphabet[i]) === -1) {
                return false;
            }
        }
        return true;
    };
};

const PangramSet = function (sentence) {
    var list = new Set(sentence.toLowerCase().split('').filter((x) => x.match('[a-z]')));
    return list.size === 26;
};

const PangramEvery = function (sentence) {
    return [..."abcdefghijklmnopqrstuvwxyz"].every((x) => sentence.includes(x));
};

console.log(PangramEvery('a n js'));

module.exports = {Pangram, PangramSet, PangramEvery};