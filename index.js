import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

imagemin(['./png/*.{jpg,jpeg,png}'], {
  destination: './webp/',
  plugins: [imageminWebp({})],
}).then(() => {
  console.log('Images Converted Successfully!!!');
});




// const webp = require('webp-converter');
// const fs = require('fs');

// async function convert(path) {
//   const [filename, ext] = path.split('.');
//   if (ext !== 'png') return;
//   const data = fs.readFileSync(`./png/${path}`);
//   const result = await makeApiWebp(data);
//   fs.writeFileSync(`./webp/${filename}.webp`, result);
// }

// function makeApiWebp(data) {
//   return new Promise((resolve, reject) => {
//     webp
//       .buffer2webpbuffer(data, 'png', '-q 80')
//       .then((result) => {
//         resolve(result);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }

// const files = fs.readdirSync('./png');
// for (const file of files) {
//   convert(file);
// }