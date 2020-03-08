module.exports = function countCats(matrix) {
  if (!matrix || !matrix.length) return 0;
  let result = matrix.reduce((acc, it) => {
    let findCats = it.filter(i => i === "^^").length;
    return acc + findCats;
  }, 0)
  return result;
};
