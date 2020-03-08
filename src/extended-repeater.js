module.exports = function repeater(str, options) {
    const {
        repeatTimes,
        separator = '+',
        addition,
        additionRepeatTimes,
        additionSeparator = '|'
        } = options;

    typeof addition === "string" ? addition : String(addition);
    typeof str === "string" ? str : String(str);
    
    let newAddition = []
    if (additionRepeatTimes) {      
        for(let i = 0; i <= additionRepeatTimes-1; i++) {
        newAddition.push(String(addition))
        }
    } 
    let newAdditionWithSeparator = newAddition.join(additionSeparator);
    if (!additionRepeatTimes && addition) {
      newAdditionWithSeparator = addition
    }
    let singlResult = str+newAdditionWithSeparator
    console.log(singlResult)
    let result = []
    for (let i = 0; i<= repeatTimes-1; i++) {
      result.push(singlResult)
    }

    let finalRezalt = repeatTimes>1 ? result.join(separator) : singlResult;

    return finalRezalt;

};
  