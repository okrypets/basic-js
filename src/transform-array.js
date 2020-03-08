module.exports = 
function transform(arr) {
  if (!Array.isArray(arr)) throw "Error";  
  if (!arr.length) return [];

    const DISCARDNEXT = "--discard-next";
    const DISCARDPREV = "--discard-prev";
    const DOUBLENEXT = "--double-next";
    const DOUBLEPREV = "--double-prev";

  let newArr = [...arr]
  let result = newArr.reduce((acc, it, index, arr) => {
    let prevIt = arr[index-1];
    let nextIt = arr[index+1];
    let controlIT = [DISCARDNEXT, DISCARDPREV, DOUBLEPREV, DOUBLENEXT].find(i => i === it)
    let controlPrev = [DISCARDNEXT, DISCARDPREV, DOUBLEPREV, DOUBLENEXT].find(i => i === prevIt)
    let controlNext = [DISCARDNEXT, DISCARDPREV, DOUBLEPREV, DOUBLENEXT].find(i => i === nextIt)

    if (controlIT) {
      if (it === DOUBLEPREV && prevIt !== undefined) {
        acc.push(prevIt);
      } else if (it === DOUBLENEXT && nextIt !== undefined) {
        acc.push(nextIt);
      } else acc
    }

  if (controlIT === undefined) {
    if (nextIt !== DISCARDPREV && prevIt !== DISCARDNEXT) { 
    acc.push(it)
    } 
    else if (nextIt === DISCARDPREV && prevIt === DISCARDNEXT) {
      acc = acc.slice(0,-1)
    }
  } else acc;   

  return acc

  }, [])
  
    return result;
  
};
