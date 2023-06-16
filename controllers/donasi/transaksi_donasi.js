const { Transaksi_Donasi, Users, Donasi, Tujuan_Donasi, Pendonasi } = require('../../database/models');
const jwt = require('jsonwebtoken');

const getTransaksiDonasi = async (req, res) => {
  try {
    const response = await Transaksi_Donasi.findAll({
      attributes: ['id', 'no_va', 'status', 'user_id'],
      include: [
        {
          model: Donasi,
          as: 'donasi',
          attributes: ['id', 'nominal'],
          include: [
            {
              model: Tujuan_Donasi,
              as: 'tujuan_donasi',
              attributes: ['id', 'name'],
            },
            {
              model: Pendonasi,
              as: 'pendonasi',
              attributes: ['id', 'name'],
            },
          ],
        },
        {
          model: Users,
          as: 'users',
          attributes: ['id', 'email'],
        },
      ],
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getTransaksiDonasiById = async (req, res) => {
  try {
    const transaksiDonasi = await Transaksi_Donasi.findOne({
      attributes: ['id', 'no_va', 'status', 'user_id'],
      include: [
        {
          model: Donasi,
          as: 'donasi',
          attributes: ['id', 'nominal'],
          include: [
            {
              model: Tujuan_Donasi,
              as: 'tujuan_donasi',
              attributes: ['id', 'name'],
            },
            {
              model: Pendonasi,
              as: 'pendonasi',
              attributes: ['id', 'name'],
            },
          ],
        },
        {
          model: Users,
          as: 'users',
          attributes: ['id', 'email'],
        },
      ],
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(transaksiDonasi);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const createTransaksiDonasi = async (req, res) => {
  const { donasi_id, no_va, status } = req.body;
  const users = jwt.verify(req.headers['x-access-token'], process.env.ACCESS_TOKEN_SECRET);
  try {
    const transaksi = await Transaksi_Donasi.create({
      donasi_id: donasi_id,
      user_id: users.id,
      no_va: no_va,
      status: status,
    });
    res.status(201).json({ transaksi: transaksi, msg: 'Transaksi Donasi created!' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const deleteTransaksiDonasi = async (req, res) => {
  const transaksiDonasi = await Transaksi_Donasi.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!transaksiDonasi) return res.status(404).json({ msg: 'transaksiDonasi not found!' });

  try {
    await Transaksi_Donasi.destroy({
      where: {
        id: transaksiDonasi.id,
      },
    });
    res.status(200).json({ msg: 'Berhaasil dihapus!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const updateTransaksiDonasi = async (req, res) => {
  const transaksiDonasi = await Transaksi_Donasi.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!transaksiDonasi) return res.status(404).json({ msg: 'transaksiDonasi not found!' });

  const { donasi_id, no_va, status } = req.body;
  try {
    await Transaksi_Donasi.update(
      {
        donasi_id: donasi_id,
        no_va: no_va,
        status: status,
      },
      {
        where: {
          id: transaksiDonasi.id,
        },
      }
    );
    res.status(200).json({ msg: 'transaksiDonasi updated!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { getTransaksiDonasi, getTransaksiDonasiById, deleteTransaksiDonasi, updateTransaksiDonasi, createTransaksiDonasi };
