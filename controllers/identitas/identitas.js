const { Identitas, Agama, Users } = require('../../database/models');
const jwt = require('jsonwebtoken');

const getIdentitas = async (req, res) => {
  try {
    const data = await Identitas.findAll({
      attributes: ['id', 'name_lengkap', 'tempat_lhr', 'tanggal_lhr', 'jenis_kelamin', 'no_nik', 'no_kk', 'provinsi', 'kabupaten', 'kecamatan', 'desa'],
      include: [
        {
          model: Users,
          as: 'users',
          attributes: ['id', 'email'],
        },
        {
          model: Agama,
          as: 'agama',
          attributes: ['id', 'name'],
        },
      ],
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getIdentitasById = async (req, res) => {
  try {
    const data = await Identitas.findOne({
      attributes: ['id', 'name_lengkap', 'tempat_lhr', 'tanggal_lhr', 'jenis_kelamin', 'no_nik', 'no_kk', 'provinsi', 'kabupaten', 'kecamatan', 'desa'],
      include: [
        {
          model: Users,
          as: 'users',
          attributes: ['id', 'email'],
        },
        {
          model: Agama,
          as: 'agama',
          attributes: ['id', 'name'],
        },
      ],
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const deleteIdentitas = async (req, res) => {
  const data = await Identitas.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!data) return res.status(404).json({ msg: 'Identitas not found!' });

  try {
    await Identitas.destroy({
      where: {
        id: data.id,
      },
    });
    res.status(200).json({ msg: 'Berhaasil dihapus!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const updateIdentitas = async (req, res) => {
  const data = await Identitas.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!data) return res.status(404).json({ msg: 'Identitas not found!' });

  const { name_lengkap, tempat_lhr, tanggal_lhr, jenis_kelamin, no_nik, no_kk, agama_id, provinsi, kabupaten, kecamatan, desa } = req.body;

  const users = jwt.verify(req.headers['x-access-token'], process.env.ACCESS_TOKEN_SECRET);

  try {
    await Identitas.update(
      {
        user_id: users.id,
        name_lengkap: name_lengkap,
        tempat_lhr: tempat_lhr,
        tanggal_lhr: tanggal_lhr,
        jenis_kelamin: jenis_kelamin,
        no_kk: no_kk,
        no_nik: no_nik,
        agama_id: agama_id,
        provinsi: provinsi,
        kabupaten: kabupaten,
        kecamatan: kecamatan,
        desa: desa,
      },
      {
        where: {
          id: data.id,
        },
      }
    );
    res.status(200).json({ msg: 'Identitas updated!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const createIdentitas = async (req, res) => {
  const { name_lengkap, tempat_lhr, tanggal_lhr, jenis_kelamin, no_nik, no_kk, agama_id, provinsi, kabupaten, kecamatan, desa } = req.body;

  const users = jwt.verify(req.headers['x-access-token'], process.env.ACCESS_TOKEN_SECRET);

  try {
    const identitas = await Identitas.create({
      user_id: users.id,
      name_lengkap: name_lengkap,
      tempat_lhr: tempat_lhr,
      tanggal_lhr: tanggal_lhr,
      jenis_kelamin: jenis_kelamin,
      no_kk: no_kk,
      no_nik: no_nik,
      agama_id: agama_id,
      provinsi: provinsi,
      kabupaten: kabupaten,
      kecamatan: kecamatan,
      desa: desa,
    });
    res.status(201).json({ identitas: identitas, msg: 'Identitas created!' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = { getIdentitas, getIdentitasById, deleteIdentitas, createIdentitas, updateIdentitas };
