"use strict";
exports.__esModule = true;
var fs = require('fs');
var ReadInput = (function (file) {
    var reader = fs.readFileSync(file, 'utf8');
    return reader.split('\n');
});
var CalcPosition = (function (input) {
    var hor = 0;
    var depth = 0;
    input.forEach(function (line) {
        var sline = line.split(' ');
        switch (sline[0]) {
            case 'down':
                depth += parseInt(sline[1]);
                break;
            case 'up':
                depth -= parseInt(sline[1]);
                break;
            case 'forward':
                hor += parseInt(sline[1]);
                break;
        }
    });
    return hor * depth;
});
var CalcWithAim = (function (input) {
    var depth = 0;
    var hor = 0;
    var aim = 0;
    input.forEach(function (line) {
        var sline = line.split(' ');
        switch (sline[0]) {
            case 'down':
                aim += parseInt(sline[1]);
                break;
            case 'up':
                aim -= parseInt(sline[1]);
                break;
            case 'forward':
                var curr = parseInt(sline[1]);
                hor += curr;
                depth += (curr * aim);
                break;
        }
    });
    return hor * depth;
});
var data = ReadInput('Day2/input.txt');
console.log(CalcPosition(data));
console.log(CalcWithAim(data));
