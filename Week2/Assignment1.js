// What do you think happens to the first element here? Does it throw an error?

let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[1] = 300;

console.log(uint8Arr[1]); // 300 % 256 = 44