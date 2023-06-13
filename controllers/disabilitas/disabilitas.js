const { Disabilitas } = require('../../database/models');
const { Kategori } = require('../../database/models');

const getDisabilitas = async (req, res) => {
  try {
    const response = await Disabilitas.findAll({
      attributes: ['id', 'name'],
      include: [
        {
          model: Kategori,
          as: 'kategori',
          attributes: ['id', 'name'],
        },
      ],
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getDisabilitasById = async (req, res) => {
  try {
    const disabilitas = await Disabilitas.findOne({
      attributes: ['id', 'name', 'kategori_id'],
      include: [
        {
          model: Kategori,
          as: 'kategori',
          attributes: ['id', 'name'],
        },
      ],
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(disabilitas);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const createDisabilitas = async (req, res) => {
  const { name, kategori_id } = req.body;

  try {
    const disabilitas = await Disabilitas.create({
      name: name,
      kategori_id: kategori_id,
    });
    res.status(201).json({ disabilitas: disabilitas, msg: 'Disabilitas created!' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const deleteDisabilitas = async (req, res) => {
  const disabilitas = await Disabilitas.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!disabilitas) return res.status(404).json({ msg: 'disabilitas not found!' });

  try {
    await Disabilitas.destroy({
      where: {
        id: disabilitas.id,
      },
    });
    res.status(200).json({ msg: 'Berhaasil dihapus!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const updateDisabilitas = async (req, res) => {
  const disabilitas = await Disabilitas.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!disabilitas) return res.status(404).json({ msg: 'disabilitas not found!' });
  const { name, kategori_id } = req.body;
  try {
    await Disabilitas.update(
      { name, kategori_id },
      {
        where: {
          id: disabilitas.id,
        },
      }
    );
    res.status(200).json({ msg: 'disabilitas updated!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { getDisabilitas, getDisabilitasById, deleteDisabilitas, updateDisabilitas, createDisabilitas };
