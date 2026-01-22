const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt');
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunkOfData) => {
// 	console.log(`\n\n----- NEW CHUNK -----\n\n`);
// 	console.log(chunkOfData.toString());
// 	writeStream.write(`\n\n\n===NEW CHUNK===\n\n\n`);
// 	writeStream.write(chunkOfData);
// });


//*piping
readStream.pipe(writeStream)
