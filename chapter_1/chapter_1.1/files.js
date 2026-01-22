const { error } = require('console');
const fs = require('fs');

//*read files
// fs.readFile('./docs/blog1.txt', (err, data) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log(data.toString());
// });

//*write files
// fs.writeFile('./docs/blog2.txt', 'Hello, this is blog 2!', ()=>{
//    console.log('file was written');
// });

// fs.writeFile('./docs/blog3.txt', 'Hello, this is blog 3!', ()=>{
//    console.log('file was written');
// });

//*delete files

if (fs.existsSync('./docs/deleteMe.txt')) {
	fs.unlink('./docs/deleteMe.txt', (error) => {
		if (error) {
			console.log(error);
		}
		console.log('file deleted');
	});
}

//*make directories

// if (!fs.existsSync('./assets')) {
// 	fs.mkdir('./assets', (error) => {
// 		if (error) {
// 			console.log(error);
// 		}
// 		console.log('folder created');
// 	});
// }else{
//    fs.rmdir('./assets', (error)=>{
//       if (error) {
// 			console.log(error);
// 		}
// 		console.log('folder deleted');
//    })
// }
