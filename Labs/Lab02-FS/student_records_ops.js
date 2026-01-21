const fs = require('fs');

const filePath = 'students.csv';

console.log(`Trying to process data from ${filePath} and create individual files for each program`);

// CSV file - comma separated values - 'utf-8' encoding
fs.readFile(filePath, "utf-8", (err, data) => {
    if (err){
        console.log(`Unable to read from ${fileName} : ${JSON.stringify(err)}`);
    }else if (data){
        // console.log(`Data from file : \n}`);
        const rows = data.split('\n');
        let fields = [];
        let program = "";
        let filePathToWrite = "";
        let dataToWrite = "";

        rows.forEach(record => {
            // obtain the fields from the first row
            fields = record.split(',');
            program = fields[2]; // program is the 4th field in each record

            if (program !== undefined){
                filePathToWrite = `${program}.csv`;
                dataToWrite = `${record}\n`;

                fs.appendFile(filePathToWrite, dataToWrite, 'utf-8', (writeErr) => {
                    if (writeErr){
                        console.log(`Unable to write to file ${filePathToWrite} : ${JSON.stringify(writeErr)}`);
                    }else{
                        console.log(`Data written to file ${program} successfully.`);
                    }
                });
            }
        });
        
    }else {
        console.log(`No data available from file.`);     
    }
})