/**
 * 
 * @param {Number} counter
 * @param {Array} vals 
 * @param {String} msg
 * 
 * Counter should be an integer. Begin a counter and decrement by 1 until zero is reached.
 * For each integer, check every element in 'vals' array. If the element is a string use it's position
 * in the Array to run the FizzBuzz determination and include the string in the output line for that 
 * integer if it matches. This is normally started with msg = ''. Any value submitted for msg will 
 * be added on to the beginning of the output stream. 
 */


const fuzzBizz = (counter, vals, msg = '') => {

    if (counter < 1){
        return msg
    }
    if (vals.length < 1)
        return msg
    
    let lineMessage = constructMessage(counter, vals, '', 0)
    if (lineMessage)
        msg += counter + ': ' + lineMessage + '\n'
    return fuzzBizz(counter - 1, vals, msg)
}

const constructMessage = (counter, vals, msg, index) => {
    if (index >= vals.length)
        return msg
    if (vals[index] === undefined)
        return constructMessage(counter, vals, msg, index + 1)
    let divisor = index + 1
    if (counter % divisor === 0)
        msg += vals[index]
    return constructMessage(counter, vals, msg, index + 1)
}

const printEmVals =[undefined, 'baz', 'fuzz', undefined, 'bizz', undefined, undefined, 'wut']
console.log(fuzzBizz(100, printEmVals))