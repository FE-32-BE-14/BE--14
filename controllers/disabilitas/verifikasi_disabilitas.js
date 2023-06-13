const { Verifikasi_Disabilitas, Users, Kategori, Disabilitas } = require('../../database/models');

const getVerifikasiDisabilitas = async (req, res) => {
  try {
    const response = await Verifikasi_Disabilitas.findAll({
      attributes: ['id', 'status_disabilitas'],
      include: [
        {
          model: Users,
          as: 'users',
          attributes: ['id', 'email'],
        },
        {
          model: Kategori,
          as: 'kategori',
          attributes: ['id', 'name'],
        },
        {
          model: Disabilitas,
          as: 'disabilitas',
          attributes: ['id', 'name'],
        },
      ],
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getVerifikasiDisabilitasById = async (req, res) => {
  try {
    const verifikasi_disabilitas = await Verifikasi_Disabilitas.findOne({
      attributes: ['id', 'user_id', 'status_disabilitas', 'kategori_id', 'disabilitas_id'],
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(verifikasi_disabilitas);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const deleteVerifikasiDisabilitas = async (req, res) => {
  const verifikasi_disabilitas = await Verifikasi_Disabilitas.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!verifikasi_disabilitas) return res.status(404).json({ msg: 'verifikasi_disabilitas not found!' });

  try {
    await Verifikasi_Disabilitas.destroy({
      where: {
        id: verifikasi_disabilitas.id,
      },
    });
    res.status(200).json({ msg: 'Berhaasil dihapus!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const updateVerifikasiDisabilitas = async (req, res) => {
  const verifikasi_disabilitas = await Verifikasi_Disabilitas.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!verifikasi_disabilitas) return res.status(404).json({ msg: 'verifikasi_disabilitas not found!' });
  const { user_id, status_disabilitas, kategori_id, disabilitas_id } = req.body;
  try {
    await Verifikasi_Disabilitas.update(
      {
        user_id: user_id,
        status_disabilitas: status_disabilitas,
        kategori_id: kategori_id,
        disabilitas_id: disabilitas_id,
      },
      {
        where: {
          id: verifikasi_disabilitas.id,
        },
      }
    );
    res.status(200).json({ msg: 'verifikasi_disabilitas updated!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const createVerifikasiDisabilitas = async (req, res) => {
  const { user_id, status_disabilitas, kategori_id, disabilitas_id } = req.body;

  try {
    const verifikasi = await Verifikasi_Disabilitas.create({
      user_id: user_id,
      status_disabilitas: status_disabilitas,
      kategori_id: kategori_id,
      disabilitas_id: disabilitas_id,
    });
    res.status(201).json({ verifikasi: verifikasi, msg: 'Verifikasi created!' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = { getVerifikasiDisabilitas, getVerifikasiDisabilitasById, deleteVerifikasiDisabilitas, updateVerifikasiDisabilitas, createVerifikasiDisabilitas };
