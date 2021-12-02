var fs = require('fs');
var lodash = require('lodash');
var ReadInput = (function (file) {
    var reader = fs.readFileSync(file, 'utf8');
    return reader.split('\n').map(function (line) { return parseInt(line, 10); });
});
var getIncrease = (function (nums) {
    var curr = nums[0];
    var res = 0;
    nums.forEach(function (n) {
        if (n > curr) {
            res++;
        }
        curr = n;
    });
    return res;
});
var getIncreaseWindow = (function (inp) {
    var nums = inp;
    var curr = [];
    var next = [];
    var res = 0;
    curr.push(nums.shift());
    var temp = nums.shift();
    curr.push(temp);
    next.push(temp);
    temp = nums.shift();
    curr.push(temp);
    next.push(temp);
    next.push(nums.shift());
    console.log(curr);
    console.log(next);
    while (nums.length > 0) {
        if (lodash.sum(curr) < lodash.sum(next)) {
            res += 1;
            //console.log(res);
        }
        curr.shift();
        curr.push(next[2]);
        next.shift();
        next.push(nums.shift());
    }
    if (lodash.sum(curr) < lodash.sum(next))
        res++;
    return res;
});
var data = ReadInput('Day1/input.txt');
console.log(getIncrease(data));
console.log(getIncreaseWindow(data));
