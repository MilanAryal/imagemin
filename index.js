import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminGiflossy from 'imagemin-giflossy';

const files = await imagemin(['./input/*.{jpeg,jpg,png,gif}'], {
	destination: './output/',
	plugins: [
		imageminMozjpeg({ quality: 80 }),
    imageminPngquant({ quality: [0.6, 0.8] }),
    imageminGiflossy(),
	],
});

console.log(files);
//=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
