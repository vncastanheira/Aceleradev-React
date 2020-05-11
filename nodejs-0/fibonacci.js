function fibonacci() {
    let sequence = [0, 1]
    let last = sequence[sequence.length-1]
    while(last < 350) {
        let next = sequence[sequence.length-1] + sequence[sequence.length-2]
        sequence.push(next)
        last = sequence[sequence.length-1]
    }
    return sequence
}

function isFibonacci(number) {
    let sequence = fibonacci()
    return sequence.includes(number)
}