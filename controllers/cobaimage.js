const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { Doc_Beasiswa } = require('../database/models');

// Konfigurasi penyimpanan Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/image/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop());
  },
});

// Inisialisasi upload Multer
const upload = multer({ storage: storage });

// Handler untuk mengunggah file
const uploadFile = upload.single('file');

const uploadFileCoba = async (req, res) => {
  uploadFile(req, res, async (error) => {
    if (error) {
      return res.status(400).json({ error: 'Failed to upload file' });
    }

    // Unggah file ke Cloudinary
    const file = req.file;
    cloudinary.uploader.upload(file.path, async (error, result) => {
      if (error) {
        return res.status(500).json({ error: 'Failed to upload file to Cloudinary' });
      }

      const publicUrl = result.secure_url;

      // Simpan informasi file ke database
      try {
        const createdFile = await Doc_Beasiswa.create({
          name: file.originalname,
          path: file.path,
          cloudinaryUrl: publicUrl,
        });

        res.status(200).json(createdFile);
      } catch (error) {
        console.error('Failed to save file to database: ', error);
        res.status(500).json({ error: 'Failed to save file to database' });
      }
    });
  });
};

module.exports = {
  uploadFileCoba,
};
