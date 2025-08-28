const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const Cheese = mongoose.model('Cheeses');

const cheeseList = function (req, res) { 
    Cheese
        .find()
            .then((cheeses,err) => {
                if (!cheeses) {
                    res
                    .status(404)
                    .json({
                        "message": "cheese not found"
                    });
                return;
                } 
                else if (err) {
                    res
                    .status(404)
                    .json(err);
                    return;
                }
            res
            .status(200)
            .json(cheeses);
        });
}

const cheeseReadOne = function (req, res){
    if (req.params && req.params.cheeseID) {
        const cheeseID = ObjectId(req.params.cheeseID);
        Cheese
            .findById(cheeseID)
            .then(cheese => {
                if (!cheese) {
                    return res.status(404).json({ "message": "Cheese not found" });
                }
                res.status(200).json(cheese);
            })
            .catch(err => res.status(500).json(err));
    }
    else {
        res
            .status(404)
            .json({
                "message" : "No cheeseID in request"
            });
    }
};

module.exports = {
  cheeseList,
  cheeseReadOne
};