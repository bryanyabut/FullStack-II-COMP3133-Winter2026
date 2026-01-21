console.log('Week 1 - Buffer Exercise');
// description: buffer is a global object in Node.js used to handle binary data directly
// Create a buffer
let buf1 = Buffer.from('Hello');

console.log('buf1');

// Create a buffer from string
buf1 = Buffer.from('John');
console.log(buf1);

// Convert buffer to string
console.log(`John - ${buf1}`);
// Alternative way to convert buffer to string
console.log("John - ", buf1);

// Convert buffer to JSON
console.log(buf1.toJSON());

// Get length of buffer
console.log(`number of elements in buffer: ${buf1.length}`);

// getting the first element of buffer
console.log(`first element of buffer: ${buf1[0]}`);
// getting the index 4th element of buffer
console.log(`fourth element of buffer: ${buf1[4]}`);
//getting index 10th element of buffer
console.log(`tenth element of buffer: ${buf1[10]}`);

console.log();

// Iterate over buffer elements
for(let i=0; i<buf1.length; i++){
    console.log(`Element at index ${i}: ${buf1[i]}`);
}

console.log();

buf1 = Buffer.from('✅😊😂');

// Different formats of buffer
console.log(`Buffer in String format: ${buf1.toString()}`);
console.log(`Buffer in JSON format: ${buf1.toJSON()}`);
console.log(`Buffer in Hex format: ${buf1.toString('hex')}`);
console.log(`Buffer in UTF-8 format: ${buf1.toString('utf8')}`);
console.log(`Buffer in UTF-16le format: ${buf1.toString('utf16le')}`);

console.log(`Length of the buffer: ${buf1.length}`);

console.log();
// allocate the size of buffer when creating it
let buf2 = Buffer.alloc(10); // allocate 10 spaces in the buffer

console.log(`length of buf2: ${buf2.length}`);
console.log('buf2 : ', buf2);

// can't use indices to write data to Buffer
buf2[0] = "A";
buf2[2] = "😊"
buf2[9] = "P";

console.log('buf2: ', buf2);
console.log(`buf2(String): ${buf2}`);

buf2.write("A", 0);
buf2.write("😊", 2);
buf2.write("P", 9);

console.log('buf2 after write: ', buf2);
console.log(`buf2 after write (String): ${buf2}`);

buf2.write("U", 4); // will overwrite the existing value at index 4

console.log();
console.log('buf2 after another write: ', buf2);
console.log(`buf2 after another write (String): ${buf2}`);

buf2.write("HelloWorld", 3); // will overwrite from index 0
console.log();
console.log('buf2 after writing HelloWorld: ', buf2);
console.log(`buf2 after writing HelloWorld (String): ${buf2}`);


// 'ERR_OUT_OF_RANGE' - index out of range
// buf2.write("Hey", 20)

console.log();

buf2 = Buffer.from([65, 66, 67, 68, 69]); // ASCII values
console.log('buf2 from ASCII values: ', buf2);
console.log(`buf2 from ASCII values (String): ${buf2}`);

console.log();

buf2 = Buffer.from([97, 98, 99, 100, 101]); // ASCII values
console.log('buf2 from ASCII values: ', buf2);
console.log(`buf2 from ASCII values (String): ${buf2}`);

console.log("Concatenating Buffers");

buf1 = Buffer.from("COMP");
// buf2 = Buffer.from(3133); error - can't create buffer from number directly
buf2 = Buffer.from("3133");
// Concatenate buf1 and buf2
let buf3 = Buffer.concat([buf1, buf2]);
console.log('buf3: ', buf3);
console.log(`buf3 (String): ${buf3}`);

console.log();

// buf3 = Buffer.concat(["ABCD", buf2]); // error - can't concatenate string directly with buffer

console.log('buf3 with string and buffer concatenation: ', buf3);
console.log(`buf3 with string and buffer concatenation(String): ${buf3}`);

console.log();

buf2.copy(buf3);
console.log('buf2 : ', buf2);
console.log(`buf2 (String): ${buf2}`);
console.log('buf3 : ', buf3);
console.log(`buf3 (String): ${buf3}`);

console.log();

buf2 = Buffer.from("ABC");
buf2.copy(buf3);

console.log('buf2 after copy: ', buf2);
console.log(`buf2 after copy (String): ${buf2}`);
console.log('buf3 after copy: ', buf3);
console.log(`buf3 after copy (String): ${buf3}`);

//Buffer.compare()
//comparing two buffer contents
// returns 0 if both are same
// if it does not match, returns 1 or -1 based on sort order
console.log();

buf1 = Buffer.from("hello");
buf2 = Buffer.from("hello");
buf3 = Buffer.from("morning");

let output = Buffer.compare(buf1, buf2);
console.log(`Comparison of buf1 and buf2: ${output}`); // 0

output = Buffer.compare(buf1, buf3);
console.log(`Comparison of buf1 and buf3: ${output}`); // 1 or -1 based on sort order

output = Buffer.compare(buf3, buf1);
console.log(`Comparison of buf3 and buf1: ${output}`); // 1 or -1 based on sort order

console.log();

// case-sensitive comparison
buf1 = Buffer.from("hello");
buf2 = Buffer.from("Hello");

output = Buffer.compare(buf1, buf2);
console.log(`Comparison of buf1 and buf2 (case-sensitive): ${output}`); // 1 or -1 based on sort order