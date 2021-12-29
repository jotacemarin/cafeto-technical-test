'use strict';

function echo (req, res, next) {
    res.send(req.params);
    return next();
};

module.exports = {
    echo
};
