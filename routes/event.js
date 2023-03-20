var express = require('express');
var router = express.Router()
const event = require('../models/Event')

/*Get all events*/
router.get('/', async (req, res,next)=>{
    try {
        const events = await event.find({});
    res.send(events)
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
});

/*Add new events*/
router.post('/add', function (req, res, next) {
    const {title, start, end, id} = req.body;
    req.body = new event ({
            title,
            start,
            end,
            id
    })
    console.log(req.body)
    req.body.save()
    res.send("event saved")
})

/*Delete events*/
router.delete('/delete/:id', function(req, res, next){
    event.findByIdAndRemove(req.params.id) 
    .then(doc => {
        if(!doc){ return res.status(404).end();}
        return res.status(204).end();
    })
    .catch(err => next(err));
})

module.exports=router;