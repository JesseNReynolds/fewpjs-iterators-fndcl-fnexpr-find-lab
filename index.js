const testVar = {}
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(arrOfObj) {
  const win = arrOfObj.find(function(obj){
    return obj.result === "W"
  })
  if (win) {
    return win.year
  }
}
