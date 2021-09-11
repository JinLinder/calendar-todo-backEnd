const mongoose = require('mongoose')
const EventSchema = mongoose.Schema({
    title: {
        type: String
    },
    start: {
        type: Date
    },

    end: {
        type: Date
    }

});

module.exports = mongoose.model('event', EventSchema)
// const mongoose = require('mongoose')
// const EventSchema = {
//     title: String

// };

// module.exports = mongoose.model('event', EventSchema)