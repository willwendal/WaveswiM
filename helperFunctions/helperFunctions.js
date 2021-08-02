const dataAverager = (item) => {
  let average = 0
  let count = 0

  item.forEach((hourlyData) => {
    average += hourlyData.visibility.sg,
    count++
  })

  average = average / count
  average = average.toFixed(2);
  return { average }
}

export { dataAverager }
