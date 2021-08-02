const dataAverager = (item) => {

  let averageVis = 0;
  let averageWaterTemp = 0;
  let count = 0;

  item.forEach((hourlyData) => {
    averageVis += hourlyData.visibility.sg,
    averageWaterTemp += hourlyData.waterTemperature.sg
    count++
  })

  averageVis = averageVis / count;
  averageVis = averageVis.toFixed(2);
  averageWaterTemp = averageWaterTemp / count;
  averageWaterTemp = averageWaterTemp.toFixed(2);
  return { averageVis, averageWaterTemp }
}

export { dataAverager }
