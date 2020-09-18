const { Router } = require('express');
const router = Router();

const { 
    getSmoothies,
    getSmoothie,
    createSmoothie,
    // deleteSmoothie, 
    updateSmoothie} = require('../controllers/smoothies.controller');

module.exports = () => {
    router.route('/')
        .get(getSmoothies)
        .post(createSmoothie)
    
    router.route('/:id')
        .get(getSmoothie)
        .put(updateSmoothie)
        // .delete(deleteSmoothie)

    return router;
}