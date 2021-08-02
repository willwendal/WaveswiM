const dataAverager = (item) => {
  let average = 0;
  let count = 0;

  item.forEach((hourlyData) => {
  average += hourlyData.visibility.sg,
  count++
  })

  average = average / count;
  return average;
};

export { dataAverager };