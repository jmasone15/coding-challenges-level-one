const convert = (minutes) => {
    return minutes * 60
}

const timeForMandC = (date) => {
    return date.getMonth() === 11 && date.getDate() === 24
}

const charCount = (char, str) => {
    return [...str].filter(x => x === char).length
}

const detectWord = (str) => {
    return [...str].filter(x => x.toLowerCase() === x).join('')
}