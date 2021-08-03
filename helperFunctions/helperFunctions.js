const dataAverager = (item) => {
  let averageVis = 0
  let averageWaterTemp = 0
  let averageCurrentDirection = 0
  let averageCurrentSpeed = 0
  let averageSwellHeight = 0
  let averageSwellPeriod = 0
  let averageSwellDirection = 0
  let averageCloudCover = 0
  let count = 0

  item.forEach((hourlyData) => {
    averageVis += hourlyData.visibility.sg,
    averageWaterTemp += hourlyData.waterTemperature.sg

    averageCurrentDirection += hourlyData.currentDirection.sg
    averageCurrentSpeed += hourlyData.currentSpeed.sg

    averageSwellHeight += hourlyData.swellHeight.sg
    averageSwellPeriod += hourlyData.swellPeriod.sg

    averageSwellDirection += hourlyData.swellDirection.sg
    averageCloudCover += hourlyData.cloudCover.sg

    count++
  })

  averageVis = averageVis / count
  averageVis = averageVis.toFixed(2)

  averageWaterTemp = averageWaterTemp / count
  averageWaterTemp = averageWaterTemp.toFixed(2)

  averageCurrentDirection = averageCurrentDirection / count
  averageCurrentDirection = averageCurrentDirection.toFixed(2)

  averageCurrentSpeed = averageCurrentSpeed / count
  averageCurrentSpeed = averageCurrentSpeed.toFixed(2)

  averageSwellHeight = averageSwellHeight / count
  averageSwellHeight = averageSwellHeight.toFixed(2)

  averageSwellPeriod = averageSwellPeriod / count
  averageSwellPeriod = averageSwellPeriod.toFixed(2)

  averageSwellDirection = averageSwellDirection / count
  averageSwellDirection = averageSwellDirection.toFixed(2)

  averageCloudCover = averageCloudCover / count
  averageCloudCover = averageCloudCover.toFixed(2)

  return {
    averageVis,
    averageWaterTemp,
    averageCurrentDirection,
    averageCurrentSpeed,
    averageSwellHeight,
    averageSwellPeriod,
    averageSwellDirection,
    averageCloudCover
  }
}

export { dataAverager }
