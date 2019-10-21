function logger(req, res, next) {
    console.log(`A ${req.method} request was made on ${req.path}!`)
    next();
}

module.exports = logger;