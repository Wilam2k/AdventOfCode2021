import { linkSync } from "fs";

var fs = require('fs');

const ReadInput = ((file : string): string[]  =>  {
    const reader = fs.readFileSync(file, 'utf8');
    return reader.split('\n');
});

const CalcPosition = ((input : string[]) => {
    let hor = 0;
    let depth = 0;
    input.forEach((line : string) => {
        let sline = line.split(' ')
        switch (sline[0]){
            case 'down':
                depth += parseInt(sline[1])
                break;
            case 'up':
                depth -= parseInt(sline[1])
                break;
            case 'forward':
                hor += parseInt(sline[1])
                break;
        }
    })
    return hor * depth
})

const CalcWithAim = ((input : string[]) => {
    let depth = 0;
    let hor = 0;
    let aim = 0;
    input.forEach((line : string) => {
        let sline = line.split(' ')
        switch (sline[0]){
            case 'down':
                aim += parseInt(sline[1])
                break;
            case 'up':
                aim -= parseInt(sline[1])
                break;
            case 'forward':
                let curr = parseInt(sline[1]);
                hor += curr
                depth += (curr * aim)
                break;
        }
    })
    return hor * depth
})


const data = ReadInput('Day2/input.txt')
console.log(CalcPosition(data))
console.log(CalcWithAim(data))