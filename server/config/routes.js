const pets = require('../controllers/pets.js');
const path = require('path');


module.exports = function(app){
    app.post('/api/pets/new',pets.add),
    app.get('/api/pets',pets.getPets)
    app.get('/api/pets/:id',pets.getPet)
    app.post('/api/pets/like/:id',pets.like),
    app.delete('/api/pets/:id',pets.adopt),
    app.put('/api/pets/:id',pets.edit),

    app.all("*", (req,res,next) =>{
        res.sendFile(path.resolve('./public/dist/public/index.html'));
    })
}