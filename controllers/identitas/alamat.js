const axios = require('axios');

const getProvinsi = async (req, res) => {
  axios
    .get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
    .then((response) => {
      const provinces = response.data;
      res.status(200).json(provinces);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

const getProvinsiById = async (req, res) => {
  const id = req.params.id;
  axios
    .get(`https://dev.farizdotid.com/api/daerahindonesia/provinsi/${id}`)
    .then((response) => {
      const provinces = response.data;
      res.status(200).json(provinces);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

const getKabupatenByProvinsi = async (req, res) => {
  const id = req.params.id;
  axios
    .get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id}`)
    .then((response) => {
      const kabupaten = response.data;
      res.status(200).json(kabupaten);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

const getKabupatenById = async (req, res) => {
  const id = req.params.id;
  axios
    .get(`https://dev.farizdotid.com/api/daerahindonesia/kota/${id}`)
    .then((response) => {
      const kabupaten = response.data;
      res.status(200).json(kabupaten);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

const getKecamatanByKabupaten = async (req, res) => {
  const id = req.params.id;
  axios
    .get(`https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${id}`)
    .then((response) => {
      const kecamatan = response.data;
      res.status(200).json(kecamatan);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

const getKecamatanById = async (req, res) => {
  const id = req.params.id;
  axios
    .get(`https://dev.farizdotid.com/api/daerahindonesia/kecamatan/${id}`)
    .then((response) => {
      const kecamatan = response.data;
      res.status(200).json(kecamatan);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

const getDesaByKecamatan = async (req, res) => {
  const id = req.params.id;
  axios
    .get(`https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${id}`)
    .then((response) => {
      const desa = response.data;
      res.status(200).json(desa);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

const getDesaById = async (req, res) => {
  const id = req.params.id;
  axios
    .get(`https://dev.farizdotid.com/api/daerahindonesia/kelurahan/${id}`)
    .then((response) => {
      const desa = response.data;
      res.status(200).json(desa);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

module.exports = {
  getProvinsi,
  getProvinsiById,
  getKabupatenByProvinsi,
  getKabupatenById,
  getKecamatanByKabupaten,
  getKecamatanById,
  getDesaByKecamatan,
  getDesaById,
};
