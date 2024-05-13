class ECTS {
    constructor(score) {
        if (score < 0 || score > 100) throw Error('Invalid Score');
        this.score = score;
    }

    ectsFromScore = function() {
        if (this.score < 60) return 'F';
        else if (this.score < 65) return 'E';
        else if (this.score < 74) return 'D';
        else if (this.score < 82) return 'C';
        else if (this.score < 90) return 'B';
        else return 'A';
    }
}

module.exports = ECTS;
