const fs = require('fs');
const path = require('path');

const filePath = 'input_countries.csv';
const outputDir = path.join(__dirname, 'countries');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

console.log(`Starting to read the file ${filePath}...`);

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err){
        console.log(`Error reading file from disk: ${err} : ${JSON.stringify(err)}`);
    }else if (data){
        const rows = data.split('\n');
        let fields = [];
        let filePathToWrite = "";
        let dataToWrite = "";

        rows.forEach((record) => {
            fields = record.split(',');
            const country = fields[0]?.trim();

            if(country !== undefined){
                filePathToWrite = path.join(outputDir, `${country}.txt`);
                dataToWrite = `${record}\n`;

                fs.appendFile(filePathToWrite, dataToWrite, 'utf-8', (writeErr) => {
                    if (writeErr) {
                        console.log(`Error writing to file ${filePathToWrite}: ${JSON.stringify(writeErr)}`);
                    }else {
                        console.log(`Successfully appended data to file ${country} successfully.`);
                    }
                });
            }
        });
    }else{
        console.log('No data found in the file.');
    }
});