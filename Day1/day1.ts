var fs = require('fs');
var lodash = require('lodash');

const ReadInput = ((file : string): number[]  =>  {
    const reader = fs.readFileSync(file, 'utf8');
    return reader.split('\n').map((line : string) => parseInt(line, 10));
});

const getIncrease = ((nums : number[]) : number => {
    let curr = nums[0];
    let res = 0;
    nums.forEach(n => {
        if(n > curr) {
            res++;
        }
        curr = n
    })
    return res
});


const getIncreaseWindow = ((inp : number[]) : number => {
    let nums = inp;
    let curr : number[] = [];
    let next : number[] = [];
    let res : number = 0;
    curr.push(nums.shift());
    let temp = nums.shift();
    curr.push(temp);
    next.push(temp);
    temp = nums.shift();
    curr.push(temp);
    next.push(temp);
    next.push(nums.shift());
console.log(curr);
console.log(next);


    while(nums.length > 0) {

        if (lodash.sum(curr) < lodash.sum(next)){
            res += 1;
        }
        curr.shift();
        curr.push(next[2])
        next.shift()
        next.push(nums.shift());
    }


    if (lodash.sum(curr) < lodash.sum(next))res++;
    return res;
});


const data = ReadInput('Day1/input.txt')
console.log(getIncrease(data));
console.log(getIncreaseWindow(data));
