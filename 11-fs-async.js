const { readFile, writeFile } = require('fs');

console.log('1. start');
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    //console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            { flag: 'a' }, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                //console.log(result);
                console.log('2. done with this task');
            }
        );
    });
});

console.log('3. starting the next one');

