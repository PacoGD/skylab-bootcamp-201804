const [node, file, ...n] = process.argv

const res = n.reduce((accum, value) => Number(accum) + Number(value))

console.log(res)