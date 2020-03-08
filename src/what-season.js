const WINTER = "winter"; 
const SPRING = "spring";
const SUMMER = "summer"; 
const AUTUMN = "autumn";
module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!"
  if (date && Object.prototype.toString.call(date) !== "[object Date]") throw "FakeDate"
  const getMonth = date.getMonth() + 1;
  if (getMonth < 1 || getMonth > 12) throw new Error('Уупс!');
  if (getMonth === 12 || getMonth === 1 || getMonth === 2) return WINTER;
  if (getMonth === 3 || getMonth === 4 || getMonth === 5) return SPRING;
  if (getMonth === 6 || getMonth === 7 || getMonth === 8) return SUMMER;
  if (getMonth === 9 || getMonth === 10 || getMonth === 11) return AUTUMN;
};
