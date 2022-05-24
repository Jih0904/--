// String 내장 객체 
const result = 'jip gagosipda.'.indexOf('jj');
console.log(result); // -1 (falsy)

const result2 = '12jaj'.
indexOf('ja');
console.log(result2);

const str = '012345';
console.log(str.length); // 6
console.log('012345'.length); // 6

const str2 = 'home sweet HOME!';
console.log(str2);
console.log(str2.indexOf('z') !== -1); //false

console.log(str2.slice(5,10)); // sweet (시작점, 직전까지)

console.log(str2.replace('sweet', 'cozy'));

// Hello 

console.log(str2.replace('sweet', ' '));

const str3 = '     George      ';
console.log(str3.trim());