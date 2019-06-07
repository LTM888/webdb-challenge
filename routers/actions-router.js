const router = require('express').Router();

const Actions = require('./actions-model');

router.get('/actions/', (req, res ) => {
    Actions.find()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res
             .status(500).json({ message: 'Unable to featch your action at this time'});
            });


});

router.post('/actions/', (req,res) => {
    Actions.add(req.body)
    .then( added => {
        res.status(200).json(added);
    })
    .catch(err => {
        res
        .status(500)
        .json({ message: 'We have an Error'});
    });
});

module.exports = router;