const cloudinary = require('cloudinary').v2;

const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

exports.uploads = async (file, folder) => {
  console.log(file, 'test');
  return cloudinary.uploader.upload(file);

  // return new Promise((resolve) => {
  //   cloudinary.uploader.upload(
  //     file,
  //     (result) => {
  //       resolve({
  //         url: result.url,
  //         id: result.public_id,
  //       });
  //     },
  //     {
  //       resource_type: 'auto',
  //       folder: folder,
  //     }
  //   );
  // });
};
