const express = require("express");
const router = express.Router();
const passport = require("passport");
const Item = require("../../models/Item");
// require('../../config/passport')(passport)


const validateRegisterInput = require("../../validation/item");


///index page
router.get("/", (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
        .catch(err => res.status(404).json({ noitemsfound: "No items found" }));
});

//////user's items
router.get('/user/:user_id', (req, res) => {
    Item.find({ user: req.params.user_id })
        .sort({ date: -1 })
        .then(items => res.json(items))
        .catch(err =>
            res.status(404).json({ noitemsfound: 'No items found from that user' }
            )
        );
});

router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res
            .status(404)
            .json({ noitemfound: "No item found with that ID" })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateRegisterInput(req.body);
        console.log(isValid)
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newitem = new Item({
            user: req.user.id,
            title: req.body.title,
            body: req.body.body,
            quantity: req.body.quantity,
            image: req.body.image
        });

        newitem.save().then(item => res.json(item))
            .catch(errors => res.status(400).json(errors));
    }
);

router.delete("/:id", (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then((item) => res.json(item.id)))
        .catch(err => res.status(404).json({ success: false }))
});

router.patch(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { errors, isValid } = validateRegisterInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
        Item.findById(req.params.id)
            .then(item => {
                if (item) {
                    const { body } = req;
                    Object.assign(item, body);
                    const updateitem = new Item(item)
                    updateitem.save().then(resitem => res.json(resitem));
                }
            });


    }
);




module.exports = router;