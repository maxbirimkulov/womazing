module.exports = (req, res, next) => {
    res.header('Content-Range', 'clothes 0-10/20');
    next()
};