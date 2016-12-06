module.exports = function head (arr) {
  try {
    return arr[0]
  } catch () {
    return undefined
  }
}
