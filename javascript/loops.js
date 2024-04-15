//loops = used to repeat stuff

let sum = 0
let n = prompt("what is your no:")
n = Number.parseInt(n)
for(let i =0;i<n;i++){
    sum += (i+1)
    console.log(`${i} + `);
}
console.log(`the sum of first ${n} natural nos is ${sum}`);