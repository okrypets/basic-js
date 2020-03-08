module.exports = function createDreamTeam(members) {
  if (!members || !Array.isArray(members)) return false;
  let result = members.reduce((acc, it) => {
    if (
      !it ||
      typeof it !== "string"
    ) return acc
    const itTrim = it.replace(/\s+/g, ' ').trim();
    const firstL = itTrim.split("")[0].toUpperCase();
    return [...acc, firstL]
  }, []).sort().join('');
  return result;
};