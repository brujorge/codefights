// Challenge https://app.codesignal.com/challenge/G5PCB7haet2QXZtGs
const classList = ["Ashley", "Robert", "Miles", "Archibald", "Taylor", "Vanessa", "Isaac"]

function takingAttendance(classList) {
  const noConsonants = ["a", "e", "i", "o", "u", "y"]
  const defaultSecondsPerName = 5 * classList.length
  let letterCombos = []
  let isComboActive = false
  for (let i = 0; i < classList.length; i++) {
    for (let j = 0; j < classList[i].length; j++) {
      if (!noConsonants.includes(classList[i][j].toLowerCase())) {
        if (isComboActive) {
          letterCombos[letterCombos.length - 1]++
        }
        else {
          isComboActive = true
          letterCombos.push(1)
        }
      }
      else {
        isComboActive = false;
      }
    }
    isComboActive = false;
  }

  const additionalSeconds = letterCombos.reduce((acc, val) => {
    return acc + Math.pow(2, val - 1)
  }, 0)

  return defaultSecondsPerName + additionalSeconds
}


