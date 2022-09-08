import  imagemin from 'imagemin';
import  imageminJpegtran from 'imagemin-jpegtran';
import  imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';

import fs from "fs";
import path from "path";

const directoryName = "images";

const fileNames = fs.readdirSync(directoryName);

// fileNames.forEach((file) => {


// console.log(file)

// });
// (async () => {
// const files = await imagemin(['images/*.{jpg,png}'], {
// 	destination: 'build/images',
// 	plugins: [
// 		imageminJpegtran(),
// 		imageminPngquant({
// 			quality: [0.6, 0.8]
// 		})
// 	]
// });
// console.log(files);
// })();


(async () => {
	const files =  await imagemin(['images/*.{jpg,png}'], {
		destination: 'build/images',
		plugins: [
			imageminWebp(
				{
					quality: 50,
					resize: {
						width: 900,
						height: 900
					},
				}
			)
		]
	});

    console.log(files);
	console.log('Images optimized');
})();

// (async () => {
// 	await imagemin(['images/*.png'], {
// 		destination: 'build/images',
// 		plugins: [
// 			imageminJpegtran()
// 		]
// 	});

// 	console.log('Images optimized');
// })();

function getExtension(filename) {
    let ext = path.extname(filename || "").split(".");
  
    return ext[ext.length - 1];
  }