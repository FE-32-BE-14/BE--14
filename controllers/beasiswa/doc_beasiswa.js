const docbeasiswa = require('../../../database/models/doc_beasiswa.js');

const getDocBeasiswa = async (req, res) => {
  try {
    const response = await docbeasiswa.findAll({
      attributes: ['id', 'ijazah_terakhir', 'prestasi', 'user_id', 'createdAt', 'updatedAt'],
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getDocBeasiswaById = async (req, res) => {
  try {
    const docbeasiswa = await docbeasiswa.findOne({
      attributes: ['id', 'ijazah_terakhir', 'prestasi', 'user_id', 'createdAt', 'updatedAt'],
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(docbeasiswa);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const deleteDocBeasiswa = async (req, res) => {
  const docbeasiswa = await docbeasiswa.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!docbeasiswa) return res.status(404).json({ msg: 'docbeasiswa not found!' });

  try {
    await docbeasiswa.destroy({
      where: {
        id: docbeasiswa.id,
      },
    });
    res.status(200).json({ msg: 'Berhaasil dihapus!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const updateDocBeasiswa = async (req, res) => {
  const docbeasiswa = await docbeasiswa.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!docbeasiswa) return res.status(404).json({ msg: 'docbeasiswa not found!' });

  try {
    await docbeasiswa.update(
      { ijazah_terakhir, prestasi, user_id },
      {
        where: {
          id: docbeasiswa.id,
        },
      }
    );
    res.status(200).json({ msg: 'docbeasiswa updated!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { getDocBeasiswa, getDocBeasiswaById, deleteDocBeasiswa, updateDocBeasiswa };
