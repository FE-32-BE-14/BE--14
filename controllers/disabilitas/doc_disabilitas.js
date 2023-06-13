const doc_disabilitas = require('../../../database/models/doc_disabilitas.js');

const getDoc_Disabilitas = async (req, res) => {
  try {
    const response = await doc_disabilitas.findAll({
      attributes: ['id', 'email', 'password', 'refresh_token'],
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getDoc_DisabilitasById = async (req, res) => {
  try {
    const doc_disabilitas = await doc_disabilitas.findOne({
      attributes: ['id', 'email', 'password', 'refresh_token'],
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(doc_disabilitas);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const deleteDoc_Disabilitas = async (req, res) => {
  const doc_disabilitas = await doc_disabilitas.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!doc_disabilitas) return res.status(404).json({ msg: 'doc_disabilitas not found!' });

  try {
    await doc_disabilitas.destroy({
      where: {
        id: doc_disabilitas.id,
      },
    });
    res.status(200).json({ msg: 'Berhaasil dihapus!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const updateDoc_Disabilitas = async (req, res) => {
  const doc_disabilitas = await doc_disabilitas.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!doc_disabilitas) return res.status(404).json({ msg: 'doc_disabilitas not found!' });

  try {
    await doc_disabilitas.update(
      { doc_disabilitas },
      {
        where: {
          id: doc_disabilitas.id,
        },
      }
    );
    res.status(200).json({ msg: 'doc_disabilitas updated!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { getDoc_Disabilitas, getDoc_DisabilitasById, deleteDoc_Disabilitas, updateDoc_Disabilitas };
