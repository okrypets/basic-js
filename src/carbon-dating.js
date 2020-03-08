const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity) return false;
  if (Number.isNaN(parseFloat(sampleActivity))) return false;
  if (typeof sampleActivity !== "string") return false;
  if (+sampleActivity <= 0) return false;
  if (+sampleActivity > MODERN_ACTIVITY) return false;

  const sampleActivityNumber = parseFloat(sampleActivity);
  const k = 0.693 / HALF_LIFE_PERIOD;
  let year = Math.log( MODERN_ACTIVITY / sampleActivityNumber) / k;
  let result = Math.ceil(year);
  return result;
};
