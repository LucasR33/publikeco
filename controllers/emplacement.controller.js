const empl = require('../models/emplacement.model');

exports.findOne = (req, res) => {
    empl.findById(req.params.id_emplacement)
    .then(data => {
        res.send(data);
    });
}