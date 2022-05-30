import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminOptipng from 'imagemin-optipng';
import imageminGifsicle from 'imagemin-gifsicle';

const files = await imagemin(['./input/*.{jpeg,jpg,png,gif}'], {
	destination: './output/',
	plugins: [
    imageminJpegtran({ progressive: true }),
    imageminOptipng(),
    imageminGifsicle(),
  ],
});

console.log(files);
//=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
