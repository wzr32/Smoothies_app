const Smoothie = require('../models/Smoothies.model');

exports.getSmoothies = async(req, res, next) => {
    try {
        const smoothies = await Smoothie.find();
        res.json(smoothies);
    } catch (err) {
        res.json(err);
        next();
    }
}

exports.getSmoothie = async(req, res, next) => {
    try {
        const smoothies = await Smoothie.findOne({_id: req.params.id});
        res.json(smoothies);
    } catch (err) {
        res.json(err);
        next();
    }
}

exports.createSmoothie = async(req, res, next) => {
    try {
        const smoothie = new Smoothie(req.body)
        await smoothie.save();
        res.json({"msg": "data saved"})
        
    } catch (err) {
        res.json(err);
        next();
    }
}

exports.updateSmoothie = async(req, res, next) => {
    try {
        await Smoothie.findOneAndUpdate({_id: req.params.id}, req.body)
        res.json({"msg":"updated"})
    } catch (err) {
        res.json(err)
        next();
    }
}

// exports.deleteSmoothie = async(req, res, next) => {
//     try {
//         await Smoothie.findOneAndDelete({_id: req.params.id})
//         res.json({"msg":"deleted"})

//     } catch (err) {
//         res.json(err)
//         next();
//     }
// }
