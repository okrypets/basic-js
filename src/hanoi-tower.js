module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let resultTurns = Math.pow(2, disksNumber) - 1;
    let resultSeconds = resultTurns / (turnsSpeed / 3600);
    //console.log(resultTurns)
    //console.log(resultSeconds)
    return {turns: resultTurns, seconds: resultSeconds}
}