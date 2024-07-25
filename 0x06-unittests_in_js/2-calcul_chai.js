const calculateNumber = (type, x, y) => {
  if (type === 'SUM') {
    return Math.round(x) + Math.round(y);
  }
  if (type === 'SUBTRACT') {
    return Math.round(x) - Math.round(y);
  }
  if (type === 'DIVIDE') {
    return Math.round(y) === 0 ? 'Error' : Math.round(x) / Math.round(y);
  }
  return 0;
};

module.exports = calculateNumber;
