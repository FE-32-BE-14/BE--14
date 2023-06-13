const { Agama } = require('../../database/models');

const getAgama = async (req, res) => {
  try {
    const response = await Agama.findAll({
      attributes: ['id', 'name'],
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getAgamaById = async (req, res) => {
  try {
    const agama = await Agama.findOne({
      attributes: ['id', 'name'],
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(agama);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const deleteAgama = async (req, res) => {
  const agama = await Agama.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!agama) return res.status(404).json({ msg: 'agama not found!' });

  try {
    await Agama.destroy({
      where: {
        id: agama.id,
      },
    });
    res.status(200).json({ msg: 'Berhaasil dihapus!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const updateAgama = async (req, res) => {
  const agama = await Agama.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!agama) return res.status(404).json({ msg: 'agama not found!' });
  const { name } = req.body;
  try {
    await Agama.update(
      { name: name },
      {
        where: {
          id: agama.id,
        },
      }
    );
    res.status(200).json({ msg: 'agama updated!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const createAgama = async (req, res) => {
  const { name } = req.body;

  try {
    await Agama.create({
      name: name,
    });
    res.status(201).json({ msg: 'Agama created!' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = { getAgama, getAgamaById, deleteAgama, updateAgama, createAgama };
