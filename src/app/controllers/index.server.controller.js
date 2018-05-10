

exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    res.render('login', {
        title: '登 录',
        user: req.user ? req.user:null,
        // car: req.user ? findCarByOwnerID(req.user._id): null
    });
};