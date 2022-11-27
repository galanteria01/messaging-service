const getDatetimeString = () => {
  const date = new Date(Date.now())
  const string = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

  return string;
}

export {
  getDatetimeString
}