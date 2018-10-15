module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(404).send({error: 'Please login to continue !!'});
    }

    //User is logged in, allow it
    next();
};