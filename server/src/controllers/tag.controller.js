const Tag = require('../models/tag.model')

const getTag = (req, res) => {
    Tag.find((err, tags) => {
        if (err) {
            res.send(err);
        }
        res.json(tags);
    });
};

const updateTag = (req, res) => {
    Tag.findOneAndUpdate(
        { _id: req.params.tagID },
        {
            $set: {
                title: req.body.title,
                description: req.body.description,
                completed: req.body.completed,
            },
        },
        { new: true },
        (err, Tag) => {
            if (err) {
                res.send(err);
            } else 
                res.json(Tag);
        }
    );
};        