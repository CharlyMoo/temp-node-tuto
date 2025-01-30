const path = require('path');

console.log(path.sep); // \
const filePath = path.join('/content', 'subfolder', 'text.txt');
const filePath2 = path.join('/content/', 'subfolder', 'text.txt');
console.log(filePath); // \content\subfolder\text.txt
console.log(filePath2); // \content\subfolder\text.txt

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute); // d:\DOCUMENTS\WebDevelopment\Node\NodeSmilga\fundamentals\content\subfolder\text.txt