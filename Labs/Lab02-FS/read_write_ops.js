// read and write file operations using Node.js 'fs' module
const fs = require('fs')

let filePath = 'data.txt';

/*
different modes for opening a file:
'r' - read only
'w' - write only
'a' - append mode
'r+' - read and write
'w+' - read and write (file is created if it does not exist)
'a+' - read and append mode
'rw' - read and write (file must exist)
'wx' - write only, fails if path exists (wwrite and execute)
'ax' - append only, fails if path exists

File system flags reference: https://nodejs.org/api/fs.html#file-system-flags
*/

// open file for read and write
// fd is the file descriptor reference to the opened file using which you can complete read/write operations
fs.open(filePath, 'r+', (err, fd) => {
    if (err){
        console.log(`Unable to open file ${filePath} : ${JSON.stringify(err)}`);
    }else{
        console.log(`File ${filePath} opened successfully.`);
        
        //perform read/write operations
        const fileData = fs.readFileSync(fd)
        console.log(`\nFile Data : \n${fileData}`);
        
        const dataBuffer = Buffer.from("\nFolks could you remind me pls the class? T310")
        fs.write(fd, dataBuffer, (error) => {
            if (error){
                console.log(`\nUnable to write to file ${filePath} : ${JSON.stringify(error)}`);
            }else{
                console.log(`\nData successfully written to ${filePath}`);
            }
        })

        //close the file once the operations are complete
        fs.close(fd)
    }
})