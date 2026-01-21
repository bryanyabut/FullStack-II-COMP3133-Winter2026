const fs = require('fs');

//path to file where you want to save data
let filePath = 'output_data.txt';

console.log(`Trying to write the data to file: ${filePath}....`);

let dataBuffer = Buffer.from("Yellow warning - snow with wind. up to 10cm of snow");

// writing to file asynchronously using fs.writeFile()
fs.writeFile(filePath, dataBuffer, (error) => {
    if (error) {
        console.log(`Error while writing to file ${filePath} : ${JSON.stringify(error)}`);
    } else {
        console.log(`\nOption 1 - Data successfully written to file ${filePath}`);
    }
});

// dataBuffer = "1233442534590909898032"
dataBuffer = "\n$$$$$$$$$$\n this is a new message from option 2 attempt";

// appending to file asynchronously using fs.appendFile()
fs.writeFile(filePath, dataBuffer, {flag:'a'},(error) => {
    if (error) {
        console.log(`Error while writing to file ${filePath} : ${JSON.stringify(error)}`);
    } else {
        console.log(`\nOption 2 - Data successfully written to file ${filePath}`);
    }
});


// writing to file synchronously using fs.writeFileSync()
dataBuffer = Buffer.from([1,2,3,4,5,6,7,8,9,10]);

const err = fs.writeFileSync(filePath, dataBuffer);
if(err){
    console.log(`Unable to write to file ${filePath} : ${JSON.stringify(err)}`);
}else{
    console.log(`\nOption 3 - Data successfully written to file ${filePath} using writeFileSync()`);
}


//delete the file
console.log(`\nTrying to delete the file: ${filePath}....`);

fs.unlink(filePath, (error) => {
    if(error){
        console.log(`Error while trying to delete the file ${filePath} : ${JSON.stringify(error)}`);
    }else {
        console.log(`File ${filePath} deleted successfully.`);
    }
});