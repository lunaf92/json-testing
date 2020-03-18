let today = []
today.push(new Date().getFullYear())
today.push(new Date().getMonth() + 1)
today.push(new Date().getDate())
today = today.join('-')

console.log(today)